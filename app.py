from flask import Flask
from extensions import db

def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blog.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    from main.routes import main_bp
    from blog.routes import blog_bp

    app.register_blueprint(main_bp)
    app.register_blueprint(blog_bp, url_prefix="/blog")

    with app.app_context():
        db.create_all()

    return app