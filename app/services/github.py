from __future__ import annotations

import logging
import re
import shutil
from pathlib import Path
import os
from app.storage.state import state
import stat
import platform
logger = logging.getLogger(__name__)

# prehand regex for parsing GitHub URLs
# supports for "/tree/<branch>" suffix, e.g. .../owner/repo/tree/dev
# thanks musshroom !
_GITHUB_RE = re.compile(
    r"^https?://github\.com/(?P<owner>[^/]+)/(?P<repo>[^/]+?)(?:\.git)?(?:/tree/(?P<branch>[^/]+))?$"
)


def _parse_github_url(url: str) -> tuple[str, str]:
    url = url.strip().rstrip("/")
    if url.endswith(".git"):
        url = url[:-4]
    url = url.rstrip(".") # remove accidental trailing dots
    m = _GITHUB_RE.match(url)
    if not m:
        raise ValueError(f"Not a valid GitHub repository URL: {url!r}")
    return m.group("owner"), m.group("repo")


def remove_readonly(func,path,exc):
    os.chmod(path,stat.S_IWRITE)
    func(path)


def _run_git(args: list[str]) -> bool:
    import subprocess
    proc = subprocess.run(args, capture_output=True, text=True)
    if proc.returncode != 0:
        logger.warning("git %s failed (exit %d): %s", args, proc.returncode, proc.stderr.strip())
        return False
    return True


def _refresh_existing_clone(target: Path) -> None:
    import subprocess
    try:
        branch = subprocess.run(
            ["git", "-C", str(target), "branch", "--show-current"],
            capture_output=True, text=True,
        ).stdout.strip()
    except Exception:
        branch = ""
    if not branch:
        logger.info("Could not determine current branch for %s; reusing clone as-is", target)
        return
    try:
        _run_git(["git", "-C", str(target), "pull", "--ff-only", "origin", branch])
    except Exception:
        logger.info("Could not refresh clone at %s", target, exc_info=True)


def clone_repo(github_url: str) -> Path:
    owner, repo_name = _parse_github_url(github_url)

    clone_url = f"https://github.com/{owner}/{repo_name}.git"
    # to preserve existing clones
    target = (state.out_dir / "repo" / owner / repo_name).resolve()

    state.pipeline_progress = {"phase": "clone", "done": 0, "total": 1}
    target.parent.mkdir(parents=True, exist_ok=True)

    if (target / ".git").exists():
        logger.info("Clone already exists at %s; refreshing", target)
        _refresh_existing_clone(target)
    elif target.exists():
        logger.info("Removing incomplete clone at %s", target)
        if platform.system() == "Windows":
            shutil.rmtree(target, onexc=remove_readonly)
        else:
            shutil.rmtree(target)
        logger.info("Cloning %s -> %s", clone_url, target)
        if not _run_git(["git", "clone", "--depth=1", clone_url, str(target)]):
            raise RuntimeError(f"git clone failed for {clone_url}: target dir could not be populated")
    else:
        logger.info("Cloning %s -> %s", clone_url, target)
        if not _run_git(["git", "clone", "--depth=1", clone_url, str(target)]):
            raise RuntimeError(f"git clone failed for {clone_url}")

    logger.info("Clone ready: %s", target)

    state.pipeline_progress = {"phase": "clone", "done": 1, "total": 1}
    state.repo_path = target

    # per-repo metadata sits inside the repo's own repolens/ folder
    state.write_repo_state({
        "kind": "clone",
        "owner": owner,
        "name": repo_name,
        "repo_path": str(target),
        "github_url": github_url,
    })
    state.register_repo("clone", owner, repo_name, target)

    return target