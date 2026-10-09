#!/usr/bin/env node
/**
 * deploy.mjs — zero-dependency GitHub Pages deployment script.
 * Replaces the `gh-pages` npm package.
 *
 * Usage: node scripts/deploy.mjs
 *
 * Pushes the contents of `dist/` to the `gh-pages` branch of the
 * current repository's remote (origin).
 */

import { execSync } from "child_process";
import { mkdirSync, rmSync, existsSync } from "fs";
import { resolve } from "path";

const DIST_DIR = resolve("dist");
const BRANCH = "gh-pages";
const REMOTE = "origin";
const WORK_DIR = resolve(".deploy-tmp");

function run(cmd, opts = {}) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit", ...opts });
}

// ── 1. Build ──────────────────────────────────────────────────────────────────
run("npm run build");

// ── 2. Resolve remote URL ─────────────────────────────────────────────────────
const remoteUrl = execSync(`git remote get-url ${REMOTE}`)
  .toString()
  .trim();
console.log(`\nDeploying to ${remoteUrl} (branch: ${BRANCH})\n`);

// ── 3. Prepare a clean worktree for the gh-pages branch ──────────────────────
if (existsSync(WORK_DIR)) rmSync(WORK_DIR, { recursive: true, force: true });
mkdirSync(WORK_DIR, { recursive: true });

try {
  // Try to check out existing gh-pages branch
  run(
    `git worktree add --no-checkout "${WORK_DIR}" ${REMOTE}/${BRANCH}`,
    { stdio: "pipe" }
  );
  run(`git -C "${WORK_DIR}" checkout ${BRANCH}`);
} catch {
  // Branch doesn't exist yet — create an orphan
  run(`git worktree add --orphan -b ${BRANCH} "${WORK_DIR}"`);
}

// ── 4. Clear old content and copy dist ───────────────────────────────────────
run(`git -C "${WORK_DIR}" rm -rf . --quiet`, { stdio: "pipe" });
run(
  process.platform === "win32"
    ? `xcopy /E /I /Y "${DIST_DIR}\\*" "${WORK_DIR}\\"`
    : `cp -r "${DIST_DIR}/." "${WORK_DIR}/"`,
  { stdio: "inherit" }
);

// ── 5. Commit and push ────────────────────────────────────────────────────────
const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);

run(`git -C "${WORK_DIR}" add -A`);
run(
  `git -C "${WORK_DIR}" diff --cached --quiet || git -C "${WORK_DIR}" commit -m "deploy: ${timestamp}"`
);
run(`git -C "${WORK_DIR}" push ${REMOTE} ${BRANCH} --force`);

// ── 6. Cleanup ────────────────────────────────────────────────────────────────
run(`git worktree remove "${WORK_DIR}" --force`);
if (existsSync(WORK_DIR)) rmSync(WORK_DIR, { recursive: true, force: true });

console.log(`\n✅ Deployed successfully to ${BRANCH} branch.`);
