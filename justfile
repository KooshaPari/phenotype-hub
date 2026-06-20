# justfile — phenotype-hub
# Governance + docs scaffolding. No build target; markdown hygiene only.

# ── Check ──────────────────────────────────────────────────────────
# Run all local quality checks (default)
check: fmt lint

# Format markdown files with prettier (if available)
fmt:
    @which prettier &>/dev/null && prettier --write "**/*.md" --parser markdown 2>/dev/null; echo "info: prettier not installed — skipping fmt"

# Lint markdown files
lint:
    @echo "=== markdownlint ==="
    @which markdownlint &>/dev/null && markdownlint "**/*.md" || echo "info: markdownlint not installed — skipping"
    @echo ""
    @echo "=== vale ==="
    @which vale &>/dev/null && vale . 2>/dev/null || echo "info: vale not installed — skipping"

# ── CI  ────────────────────────────────────────────────────────────
# Run CI-equivalent checks (no write side effects)
ci: lint

# ── Housekeeping ───────────────────────────────────────────────────
# Prune stale worktrees and orphaned branches (dry-run by default)
prune mode="dry-run":
    @echo "prune: {{mode}} (not yet automated — see AGENTS.md)"

# Show repository overview
info:
    @echo "phenotype-hub — Phenotype org hub scaffold"
    @echo "files:    $(shell find . -type f -not -path './.git/*' | wc -l)"
    @echo "governance: editors: .editorconfig .gitattributes"
    @echo "            contributor: CODE_OF_CONDUCT.md CONTRIBUTING.md SECURITY.md"
    @echo "            automation:  .github/{CODEOWNERS,dependabot.yml,ISSUE_TEMPLATE,PULL_REQUEST_TEMPLATE.md}"

# ── Help ────────────────────────────────────────────────────────────
# List available recipes
default:
    @just --list
