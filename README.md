# Career Hub

A personal job-search web app built with Flask. Runs locally for development and deploys to Netlify as a static site.

---

## Project Structure

```
career-hub/
├── app.py                        # Flask app + route registry
├── freeze.py                     # Exports static build for Netlify
├── requirements.txt
├── netlify.toml                  # Netlify build config
├── README.md
├── static/
│   ├── css/
│   │   └── base.css              # Shared styles (nav, footer, homepage)
│   └── js/
│       └── linkedin_tracker.js   # Tracker logic
└── templates/
    ├── base.html                 # Shared layout (nav + footer)
    ├── index.html                # Homepage (page directory)
    └── pages/
        └── linkedin_tracker.html # 14-day LinkedIn strategy tracker
```

---

## Local Setup

### 1. Clone / download the project

```bash
cd career-hub
```

### 2. Create a virtual environment

```bash
python -m venv venv
source venv/bin/activate        # Mac/Linux
venv\Scripts\activate           # Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the dev server

```bash
python app.py
```

Open http://localhost:5000 in your browser.

---

## Deploy to Netlify

### Option A — Netlify CLI (recommended)

```bash
# Install Netlify CLI once
npm install -g netlify-cli

# Build the static site
python freeze.py

# Deploy
netlify deploy --dir=build --prod
```

### Option B — Netlify via GitHub (automatic deploys)

1. Push this project to a GitHub repo
2. Go to https://app.netlify.com → "Add new site" → "Import from Git"
3. Set build command: `pip install -r requirements.txt && python freeze.py`
4. Set publish directory: `build`
5. Click Deploy

Every push to `main` will auto-deploy.

---

## Adding a New Page

### Step 1 — Create the template

```
templates/pages/your_page.html
```

Extend the base layout:

```html
{% extends "base.html" %}
{% block title %}Your Page Title — Career Hub{% endblock %}

{% block head %}
<style>
  /* page-specific styles here */
</style>
{% endblock %}

{% block content %}
<div class="shell">
  <!-- your page content -->
</div>
{% endblock %}
```

### Step 2 — Add the route in app.py

```python
@app.route("/your-page/")
def your_page():
    return render_template("pages/your_page.html")
```

### Step 3 — Add to the nav in base.html

```html
<a href="{{ url_for('your_page') }}" class="nav-link ...">your page</a>
```

### Step 4 — Add to the homepage registry in app.py

```python
{
    "title": "Your Page Title",
    "description": "One-line description shown on the homepage.",
    "url": "/your-page/",
    "tag": "your-tag",
    "tag_color": "teal",   # teal | blue | amber
    "status": "live",      # live | coming soon
},
```

### Step 5 — Add JS to static/js/ (if needed)

Reference it from your template:

```html
<script src="{{ url_for('static', filename='js/your_page.js') }}"></script>
```

---

## Pages

| Page | URL | Status |
|------|-----|--------|
| Homepage | / | live |
| LinkedIn 14-Day Tracker | /linkedin-tracker/ | live |

---

## Tech Stack

- **Flask** — local dev server + templating
- **Frozen-Flask** — static site export
- **Netlify** — hosting (free tier is enough)
- **Vanilla JS + localStorage** — no backend needed for state
