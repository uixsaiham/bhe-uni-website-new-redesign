# BHE UNI country page template v1

Approved reference: Spain page as saved on 27 October 2026. Use this exact design for the next four country pages. Change only country content, metadata, links, and country-specific images. Do not redesign or change typography, structure, section order, icons, colors, spacing, or interactions unless requested.

## Source and resources

`source/study-in-spain.html` is the frozen reference. Its local CSS, JS, fonts/images referenced directly by source, and SVG icons are retained beside it with their relative paths. `manifest.json` lists the saved resources. Serve `source` with a static HTTP server to inspect the reference. Google Fonts, Bootstrap CSS/JS and Bootstrap Icons keep their existing CDN references.

## Section order

1. Shared header and navigation.
2. Country hero, photo and country flag badge.
3. Why study: destination photo and overlapping blue badge.
4. Who this page is for: four cards and closing banner.
5. Study routes: horizontal cards, arrows, hidden scrollbar.
6. Entry requirements: four vertical tabs, orange gradient active state, gold outlined panel.
7. Costs and scholarships: warm rounded panel, two cost columns, white support card.
8. Working while studying: pale split section, happy transparent student group anchored to blue bottom strip.
9. After graduation: three centered features with supplied SVG icons.
10. How BHE UNI helps: six centered rounded cards with supplied SVG icons.
11. Where we support you: warm panel, student in front of country flag, text on right.
12. FAQs: five rounded accordion rows, numbered badges, orange plus icons.
13. Closing CTA: blue gradient, orange pill consultation button, six outlined destination links.
14. Shared footer and consultation modal.

## Layout and asset rules

- Exactly 80px between section boxes at every viewport, controlled by the main flex gap. The closing CTA has square corners, no outer shadow, and joins the footer directly with zero gap. Remove competing outer margins rather than adding spacing.
- Preserve responsive breakpoints and existing mobile stacking.
- Preserve Kanit typography, navy headings, orange/gold gradients, rounded corners and icon dimensions.
- Keep the existing `spain-page` CSS scope when cloning; it is a styling hook, not visible copy. Rename scope only if all corresponding selectors are migrated together.
- Supplied feature icons: SVG; graduation icons 64×64, help icons 60×60. Copy these unchanged.
- Happy student group: transparent PNG with real alpha; bottom flush against the blue strip. Never use a rectangular background photo here.
- Support image: transparent PNG student with the destination country's flag behind them. Preserve full head and flag; bottom align to panel.
- Destination photographs: JPG/WebP, preserve reference aspect ratios, cover crop and rounded corners.
- Keep generated assets locally in the new country's asset folder. Never depend on Downloads or `.codex/generated_images` paths.
- Preserve keyboard tab navigation, accordion behavior, alt text, and consultation interactions.
- Preserve Spain page; create new country files. Use isolated country content/assets to avoid changing previous pages.
- Replace all country references in visible text, title, description, canonical/OG/Twitter metadata, image alt text, links, questions and answers. Do not invent admission or immigration claims.
- Bump CSS cache version after edits. Verify desktop and mobile layout, image placement, all four tabs, FAQs, horizontal arrows, links, and section spacing.
