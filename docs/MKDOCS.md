# MkDocs Support

MkDocs is the human interface for the documentation in this repository. The Markdown files under `docs/` remain the canonical source of truth.

## Navigation Model

Navigation is hybrid:

- `docs/.nav.yml` owns the curated top-level information architecture.
- Directory-level `.nav.yml` files own local ordering where order matters.
- `*` entries include the remaining pages and subdirectories automatically.

This means a new Markdown file under an existing documented section normally appears in the site without a global `mkdocs.yml` change.

## Folder Landing Pages

Existing `README.md` files are used as folder landing pages. For example, `docs/economics/README.md` builds as the Economics section index.

The root `docs/index.md` is the site home page. The root `docs/README.md` is intentionally excluded from the MkDocs build because it would publish to the same URL as `docs/index.md`.

## Presentation Files

Terminal 2 owns these MkDocs support files:

- `mkdocs.yml`
- `requirements-docs.txt`
- `docs/index.md`
- `docs/MKDOCS.md`
- `docs/.nav.yml`
- directory-level `.nav.yml` files
- `docs/javascripts/mermaid-init.js`
- future files under `docs/assets/`, `docs/stylesheets/`, or `docs/javascripts/`

Do not place commercial architecture, forecasts, assumptions, pricing decisions, legal conclusions, or stakeholder claims in these files.

## Terminal 1 Rule

Terminal 1 may create or update Markdown under existing documentation sections without editing `mkdocs.yml`.

For ordinary new pages, write the document in the right directory and let automatic navigation pick it up.

## Terminal 2 Rule

Terminal 2 owns:

- top-level navigation;
- directory ordering metadata;
- theme and search configuration;
- Mermaid presentation support;
- local build support;
- future publishing support.

## New Top-Level Sections

A new top-level documentation domain should be deliberate. Add it to `docs/.nav.yml` only when the repository has a real new domain, such as a new major ecosystem, governance domain, or product family.

## New Pages

A new page under an existing section should appear automatically because local `.nav.yml` files use `*` entries.

If a page needs a specific position, add only its filename to that directory's `.nav.yml` and keep the trailing `*`.

## Hiding Pages

Files matching `*.hidden.md` are hidden from primary navigation by the inherited rule in `docs/.nav.yml`.

Hidden pages are still built, linkable, and searchable. Use this for supporting worksheets or low-level presentation material that should not crowd the sidebar.

Do not hide canonical commercial documents just to make navigation shorter.

## Local Commands

```bash
python3.12 -m venv .venv-docs
source .venv-docs/bin/activate
pip install -r requirements-docs.txt
mkdocs serve
mkdocs build --strict
```

Any Python 3.10 or newer interpreter is suitable. On this machine, `python3` is 3.9, so `python3.12` is the reliable local command.

`mkdocs serve` watches the docs tree and reloads the browser when Markdown or presentation files change.

Material for MkDocs may print a warning about planned MkDocs 2.0 incompatibilities. This repository pins MkDocs to `>=1.6.1,<2.0` for the current scaffold. To hide the local warning without changing the build, run:

```bash
export NO_MKDOCS_2_WARNING=1
```

## Mermaid

Mermaid is browser-rendered. Add future diagrams as fenced code blocks:

````markdown
```mermaid
flowchart TD
    A --> B
```
````

No generated diagram images are required.

## Troubleshooting

Run `mkdocs build --strict` before publishing or sharing a review build.

Common issues:

- Missing navigation target: check the path in the nearest `.nav.yml`.
- Page not appearing: confirm it is under an existing documented section and not named `*.hidden.md`.
- Folder not behaving as a landing page: confirm the folder has a `README.md`.
- Mermaid not rendering: confirm the code block language is `mermaid` and the browser can load the configured Mermaid script.
