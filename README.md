# Kingdom Research

A parchment-and-bronze research tree with **Blacksmith** and **Library** tabs. Built with plain HTML, CSS, and JavaScript. No framework, installation, API keys, or build step required.

## Run locally

Open `dist/index.html` in a browser, or serve it with Python 3:

```sh
python -m http.server 4173 --directory dist
```

Visit [localhost:4173](http://localhost:4173).

## Research

- **General upgrades:** infantry, rangers, and cavalry chains with Medium, Heavy, and Champion steps. Each step has one level and grants +2, +4, or +6 offensive and defensive power.
- **Unit upgrades:** nine independent units, including Archer after Spearmen. Three levels give 2%, 4%, and 6% total offensive power, defensive power, and travel speed bonuses.
- **Library:** Irrigation (food), Bow Saw (wood), Shaft Mine (clay), Quarry (iron), Backpack (scavenging carry capacity), Mason (building speed), and Fortified (wall defense). Each has three linked one-level steps granting 2%, 4%, and 6% bonuses.
- **Divine research:** Divine Labor (+5% population cap after the first god), Forge of the Gods (−25% Blacksmith research cost after the second), and Rampage (−10% myth unit cost and training time after the third).

Select a card to inspect its effect and prerequisite; research it to advance. The **Gods chosen (preview)** control simulates divine prerequisites. Lowering that value resets affected divine research.

This is an interactive prototype: research progress is held in memory and resets on reload. Bonuses are displayed research definitions, not a connected game economy. On phones, linked trees scroll horizontally and independent cards use a compact grid.

## Repository layout

```text
.github/workflows/check.yml  Syntax and asset checks on pushes and pull requests
.github/workflows/pages.yml Optional, manually triggered GitHub Pages deployment
scripts/check-assets.mjs    Checks local HTML and CSS asset references
dist/index.html            Page markup
dist/style.css             Theme and responsive layout
dist/app.js                Research data, prerequisites, state, and interactions
dist/assets/               Supplied reference image used as an icon sprite
```

`dist/` is the editable source of this buildless site; commit it to GitHub.

## Upload to GitHub

Use the contents of this project folder as the repository root, so `.github/`, `dist/`, and `README.md` are directly at the top level. In GitHub Desktop, add this project folder as an existing local repository and choose **Publish repository**. Alternatively, extract the GitHub-ready ZIP and upload its contents to a new repository. Include the hidden `.github` folder.

No GitHub repository or remote is configured by this preparation step.

## Optional GitHub Pages hosting

1. In your GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the source.
2. Open **Actions → Deploy GitHub Pages → Run workflow** on your default branch.
3. Open the URL reported by the successful deployment. Run the workflow again when you want to publish later edits.

Deployment is opt-in and publishes only `dist/`. Relative asset paths support repository subpaths. The workflow follows [GitHub's static Pages workflow](https://github.com/actions/starter-workflows/blob/main/pages/static.yml).

## Checks

With Node.js installed:

```sh
node --check dist/app.js
node scripts/check-assets.mjs
```

These checks also run on GitHub pushes and pull requests. They do not replace a browser interaction check.

## Editing

Research definitions live in `groups` in `dist/app.js`. Keep IDs unique and update prerequisite IDs when renaming them. An item's `max` controls its level cap. Divine research uses `requiredGods`. Styling is in `dist/style.css`.

Optional WebMCP tools (`read_research_tree` and `research_upgrade`) are registered only in supported browsers. Other browsers use the same visible controls.

## Assets and hosting metadata

The icon sprite is the supplied reference screenshot, not newly licensed artwork. No license is assigned to it or this project by this preparation step. Google Fonts are optional external requests; system-font fallbacks are provided.

The existing working checkout may contain `.openai/hosting.json` for its original Sites deployment. It is not needed by GitHub Pages and is excluded from the GitHub-ready ZIP. The ZIP also excludes Git history, local screenshots, credentials, and deployment archives.
