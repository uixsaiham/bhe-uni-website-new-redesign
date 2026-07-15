# BHE Uni Website Redesign

This repository contains the source code for the BHE Uni Website Redesign.

## Project Structure
- `index.html`: Main entry point that automatically redirects to the redesigned portal inside the `bootstrap` folder.
- `bootstrap/`: Contains the actual website files, including:
  - HTML pages (e.g., `about.html`, `careers.html`, `contact.html`, `courses.html`, `universities.html`, etc.)
  - `styles.css`: Custom Vanilla CSS style sheet.
  - Data files (`courses-data.js`, `jobs-data.js`, `universities-data.js`).
  - Javascript scripts (`app.js`, `about.js`, etc.).
  - `assets/`: Image resources, logos, and icons.
- `screenshots/`: Diagnostic and design layout screenshots.
- `uploads/`: Original content files, assets, documents, and reference materials.

## Running Locally

To run the project locally, start a local HTTP server in the root directory.

### Option 1: Python HTTP Server (Recommended)
If you have Python installed, run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Option 2: Node.js (http-server)
If you have Node.js installed, run:
```bash
npx http-server -p 8000
```
Then visit `http://localhost:8000`.
