from flask import Flask, render_template, url_for, abort
from core.pages import get_pages

app = Flask(__name__)

# Inject pages globally into templates
@app.context_processor
def inject_pages():
    return dict(get_pages=get_pages)


# Home page
@app.route("/")
def index():
    pages = get_pages()

    for page in pages:
        page["url"] = url_for("page", slug=page["slug"])

    return render_template("index.html", pages=pages)


# Dynamic page system (scalable)
@app.route("/<slug>/")
def page(slug):
    pages = get_pages()
    page = next((p for p in pages if p["slug"] == slug), None)

    if not page:
        abort(404)

    return render_template(f"pages/{slug}.html", page=page)


if __name__ == "__main__":
    app.run(debug=True)