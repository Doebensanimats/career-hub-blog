from flask_frozen import Freezer
from app import app
from core.pages import get_pages
import config

app.config.from_object(config)

freezer = Freezer(app)


# Home page
@freezer.register_generator
def index():
    yield {}


# All dynamic pages
@freezer.register_generator
def page():
    for p in get_pages():
        yield {"slug": p["slug"]}


if __name__ == "__main__":
    freezer.freeze()
    print("✓ Build complete → /build")