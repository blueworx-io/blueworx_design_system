# Blueworx Design System

## Overview

`blueworx_design_system` is a shared asset library for Blueworx WordPress plugins.

This repo is not a WordPress plugin. It must not contain PHP files.

This repo is published as the npm package:

`@blueworx-io/blueworx_design_system`

The package is published to GitHub Packages:

`https://npm.pkg.github.com`

All Blueworx component markup should be placed inside `#bwx-app` so the design system does not override custom plugin styling outside the app area.

The existing `assets/` folder is kept for compatibility until the npm package output in `dist/` is confirmed working in plugins.

## Package Structure

- `src/core/index.css`: tokens, shared components, Tailwind, and Flowbite styles.
- `src/core/index.js`: Flowbite init and the core `window.Bwx` helpers.
- `src/gantt/index.css`: Frappe Gantt styles and Blueworx overrides.
- `src/gantt/index.js`: `Bwx.Gantt.init()`.
- `src/calendar/index.css`: FullCalendar Blueworx overrides.
- `src/calendar/index.js`: `Bwx.Calendar.init()`.
- `dist/`: generated package output.
- `assets/`: old CDN/fallback files kept until the package output is confirmed.

## Installing In A Plugin Repo

Add this to the plugin repo `.npmrc`:

```text
@blueworx-io:registry=https://npm.pkg.github.com
```

Then install:

```bash
npm install @blueworx-io/blueworx_design_system
```

## Importing In A Plugin Repo

Core:

```js
import '@blueworx-io/blueworx_design_system/core.css';
import '@blueworx-io/blueworx_design_system';
```

Gantt:

```js
import '@blueworx-io/blueworx_design_system/gantt.css';
import '@blueworx-io/blueworx_design_system/gantt';
```

Calendar:

```js
import '@blueworx-io/blueworx_design_system/calendar.css';
import '@blueworx-io/blueworx_design_system/calendar';
```

## Build Commands

- `npm run build`: builds all entry points.
- `npm run build:core`: builds core only.
- `npm run build:gantt`: builds gantt only.
- `npm run build:calendar`: builds calendar only.

## Design Tokens

All tokens are defined in `:root`.

Do not hardcode colour, spacing, or font values outside `tailwind.config.js` and CSS token definitions.

### Colours

- `--bwx-primary: #4F46E5`
- `--bwx-primary-hover: #4338CA`
- `--bwx-primary-light: #EEF2FF`
- `--bwx-dark: #0A0C29`
- `--bwx-dark-subtle: #13163D`
- `--bwx-text: #111827`
- `--bwx-text-muted: #6B7280`
- `--bwx-border: #E5E7EB`
- `--bwx-bg: #F9FAFB`
- `--bwx-bg-white: #FFFFFF`
- `--bwx-success: #16A34A`
- `--bwx-warning: #D97706`
- `--bwx-danger: #DC2626`
- `--bwx-info: #2563EB`

### Typography

- `--bwx-font: 'Sora', -apple-system, BlinkMacSystemFont, sans-serif`
- `--bwx-text-xs: 0.75rem`
- `--bwx-text-sm: 0.875rem`
- `--bwx-text-base: 1rem`
- `--bwx-text-lg: 1.125rem`
- `--bwx-text-xl: 1.25rem`
- `--bwx-text-2xl: 1.5rem`
- `--bwx-font-normal: 400`
- `--bwx-font-medium: 500`
- `--bwx-font-semibold: 600`
- `--bwx-font-bold: 700`

### Spacing

- `--bwx-space-1: 4px`
- `--bwx-space-2: 8px`
- `--bwx-space-3: 12px`
- `--bwx-space-4: 16px`
- `--bwx-space-5: 20px`
- `--bwx-space-6: 24px`
- `--bwx-space-7: 28px`
- `--bwx-space-8: 32px`
- `--bwx-space-9: 36px`
- `--bwx-space-10: 40px`
- `--bwx-space-11: 44px`
- `--bwx-space-12: 48px`

### Borders And Radius

- `--bwx-radius-sm: 4px`
- `--bwx-radius-md: 6px`
- `--bwx-radius-lg: 8px`
- `--bwx-radius-xl: 12px`
- `--bwx-radius-full: 9999px`
- `--bwx-border-width: 1px`

### Shadows

- `--bwx-shadow-sm: 0 1px 2px rgba(0,0,0,0.05)`
- `--bwx-shadow-md: 0 4px 6px rgba(0,0,0,0.07)`
- `--bwx-shadow-lg: 0 10px 15px rgba(0,0,0,0.08)`

### Layout Helpers

- `--bwx-layout-max-width: 1440px`
- `--bwx-sidebar-width: 260px`
- `--bwx-table-min-width: 720px`
- `--bwx-kanban-column-width: 280px`
- `--bwx-scrollbar-size: 8px`
- `--bwx-page-min-height: 100vh`
- `--bwx-transition: 150ms ease`

## Component Classes

All component classes use the `bwx-` prefix and must be used inside `#bwx-app`.

- `bwx-page`: main page shell.
- `bwx-main`: main content area beside the sidebar.
- `bwx-container`: centered content wrapper.
- `bwx-section`: vertical spacing between page sections.
- `bwx-heading`: main section heading.
- `bwx-subheading`: muted supporting heading text.
- `bwx-grid`: responsive grid layout.
- `bwx-sidebar`: dark left navigation area.
- `bwx-sidebar-brand`: brand text inside the sidebar.
- `bwx-sidebar-nav`: sidebar navigation list.
- `bwx-sidebar-link`: sidebar navigation link.
- `bwx-is-active`: active sidebar link state.
- `bwx-stat-grid`: responsive stat card grid.
- `bwx-stat-card`: dashboard stat card.
- `bwx-stat-label`: small label inside a stat card.
- `bwx-stat-value`: main value inside a stat card.
- `bwx-table-wrap`: scrollable table wrapper.
- `bwx-table`: styled data table.
- `bwx-badge`: default badge.
- `bwx-badge-success`: success badge.
- `bwx-badge-warning`: warning badge.
- `bwx-badge-danger`: danger badge.
- `bwx-badge-info`: info badge.
- `bwx-kanban`: horizontal kanban board.
- `bwx-kanban-column`: kanban column.
- `bwx-kanban-title`: kanban column title.
- `bwx-kanban-list`: card list inside a kanban column.
- `bwx-kanban-card`: kanban card.
- `bwx-kanban-card-title`: kanban card title.
- `bwx-kanban-card-text`: muted kanban card text.
- `bwx-form`: form layout wrapper.
- `bwx-form-row`: single form field row.
- `bwx-label`: form label.
- `bwx-input`: text input.
- `bwx-select`: select field.
- `bwx-textarea`: textarea field.
- `bwx-help-text`: small help text below a field.
- `bwx-button`: primary button.
- `bwx-button-secondary`: secondary button.

## JavaScript Namespace

The design system exposes one global object:

`window.Bwx`

Available helpers:

- `Bwx.init()`: runs all safe auto-initialisers.
- `Bwx.initFlowbite()`: initialises Flowbite when available.
- `Bwx.Tables.init()`: initialises DataTables for all elements with `data-bwx-table`.
- `Bwx.Kanban.init()`: initialises jQuery UI Sortable for all columns with `data-bwx-kanban-col`.
- `Bwx.Charts.init(id, config)`: creates a Chart.js chart for the given element id or canvas element.
- `Bwx.Gantt.init(selector, tasks, options)`: creates a Frappe Gantt chart.
- `Bwx.Calendar.init(selector, options)`: creates and renders a FullCalendar calendar.

The core JS file runs `Bwx.init()` on `DOMContentLoaded`.

If Flowbite, DataTables, jQuery UI Sortable, Chart.js, Frappe Gantt, or FullCalendar are not loaded, the helper skips that feature without errors.

## Plugin Usage Rules

- Wrap Blueworx plugin admin screens in `#bwx-app`.
- Use `bwx-` classes for shared layout and components.
- Use Tailwind and Flowbite in the plugin when needed, but do not change this repo for one-off plugin screens.
- Do not add plugin-specific colours, layouts, business rules, PHP, database code, or WordPress hooks to this repo.
- Do not write global CSS selectors that affect WordPress admin screens outside `#bwx-app`.
- If a plugin needs custom styling, keep it inside that plugin unless it should become shared across multiple Blueworx plugins.
- Before using this design system in an existing custom WordPress plugin, confirm it will not override that plugin's custom styling.

## What Goes In This Repo

Use this repo for:

- Shared design tokens.
- Shared component styling.
- Small shared JavaScript helpers.
- Documentation for how plugins should consume the design system.

Do not use this repo for:

- WordPress plugin files.
- PHP code.
- Plugin-specific screens.
- Plugin-specific business logic.
- Plugin-specific Tailwind builds.
- Plugin-specific Flowbite setup.
- Local fallback copies for individual plugins.

## Updating Plugin Fallback Copies

After changes are published:

1. Confirm the npm package is serving the latest CSS and JS files.
2. In each plugin that uses local fallback files, replace the fallback CSS with the latest built CSS.
3. Replace the fallback JS with the latest built JS.
4. Test the plugin with the package assets enabled.
5. Test again with the fallback files so the local fallback is confirmed.
6. If the plugin has a version number, update the plugin version before committing plugin changes.
