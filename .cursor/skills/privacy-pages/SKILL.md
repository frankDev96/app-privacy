---
name: privacy-pages
description: >-
  Enforces privacy-page rules for this site on every prompt. Use when adding,
  editing, or reviewing a privacy page, policy copy, the privacy listing, or
  any app privacy content.
---

# Privacy pages

- no links inside privacy page
- follow styles and format of current implementation while adding new privacy page for new app

## Add a privacy page

1. Register the app in `content/apps.ts` with `slug`, `name`, `summary`, `effectiveDate`, and `icon`.
2. Add a policy component in `content/policies.tsx` and register it on `policies` under that slug.
3. Write sections with `PolicySection`. An untitled introduction is a `section` with `space-y-3`.
4. Leave routing in `app/[slug]/privacy/page.tsx`. It already renders every registered app.
5. Do not add `Link`, `a`, `ExternalLink`, or any other anchor in the privacy page, its header, or its policy copy. Name outside documents in plain text.
6. Match the existing type scale, spacing, and section order. Do not introduce a new layout.
