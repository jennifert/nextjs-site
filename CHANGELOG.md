# Changelog

## 2026-11-25 — Projects Page Refresh

### Added

- Personal introduction reflecting the site's hobby development and creative side quests.
- Shared project and API status labels.
- Reusable `ProjectStatus` component.
- Current and archived project sections.
- Automatically calculated project and API discovery counts.
- Collapsible API categories with individual category counts.
- Added automatic exclusion of local development URLs from link checking.
- Added categorized link-checking results and a summary report.
- Added a check for missing static build output.

### Changed

- Updated project cards on the homepage and Projects page.
- Improved API discovery descriptions and status tracking.
- Updated portfolio technology information and terminology.
- Improved Projects page organization using native HTML accordions and classless Pico CSS.
- Improved distinction between broken external links and links requiring manual verification.
- Reduced link-checking concurrency to help minimize external rate limiting.
- Improved internal link detection for local static builds.

### Fixed

- Corrected outdated Archer CMS database information.
- Updated Pokémon Team Builder technology information.
- Resolved duplicate portfolio entries and project IDs.
- Fixed additional broken links identified during static site link checking.
- Updated outdated external resource links.

### Documentation

- Updated README with project data structure and reusable component information.
- Updated TODO with completed improvements and future development ideas.

No additional dependencies were introduced.

## 5.0.4 - 2026-08-28

- Update packages
- Adding link checker.

## 5.0.3 - 2026-06-22

### Updates
- Added new note

### Fixed
- Fixed projects featured.

## 5.0.2 - 2026-06-21

### Updates
- Added new project in JSON.
- NPM updated

## 5.0.1 - 2026-04-18

### Changed
- Finished migration of older posts into MDX notes
- Continued refining migrated note wording, links, and metadata

### Fixed
- Cleaned up older note content during migration
- Repaired or updated outdated internal and external links where needed

## 5.0.0 - 2026-04-17

### Added
- Added dedicated About, Photography, Search, Sitemap, and Privacy pages
- Added MDX-based note support
- Added custom MDX components for `Image` and `SafeIframe`
- Added a clearer footer with content licensing, source code, privacy, and repository links

### Changed
- Reworked the overall site layout and navigation
- Replaced the older Tailwind-heavy page structure with a simpler Pico CSS approach
- Shifted the site focus toward projects, photography, and notes
- Renamed “blog” references to “notes” where appropriate
- Updated the homepage structure and simplified the hero section
- Updated shared layout, header, and footer structure
- Moved note content to a shared MDX-based template

### Fixed
- Improved spacing and card layouts across major pages
- Fixed footer layout and horizontal link styling
- Improved migrated note wording, metadata, and status messaging
- Cleaned up outdated notices and note descriptions