from flask import Blueprint, render_template, request, redirect, url_for
from extensions import db
from models import Post

main_bp = Blueprint("main", __name__)


@main_bp.route("/")
def index():
    return render_template("index.html")


@main_bp.route("/posts")
def blog_list():
    posts = Post.query.order_by(Post.date.desc()).all()
    return render_template("blog/blog_list.html", posts=posts)


@main_bp.route("/post/<int:id>")
def blog_post(id):
    post = Post.query.get_or_404(id)
    return render_template("blog/blog_post.html", post=post)


@main_bp.route("/add", methods=["GET", "POST"])
def add_post():
    if request.method == "POST":
        post = Post(
            title=request.form["title"],
            content=request.form["content"]
        )
        db.session.add(post)
        db.session.commit()
        return redirect(url_for("main.blog_list"))

    return render_template("blog/add_post.html")


@main_bp.route("/edit/<int:id>", methods=["GET", "POST"])
def edit_post(id):
    post = Post.query.get_or_404(id)

    if request.method == "POST":
        post.title = request.form["title"]
        post.content = request.form["content"]
        db.session.commit()
        return redirect(url_for("main.blog_list"))

    return render_template("blog/edit_post.html", post=post)


@main_bp.route("/delete/<int:id>")
def delete_post(id):
    post = Post.query.get_or_404(id)
    db.session.delete(post)
    db.session.commit()
    return redirect(url_for("main.blog_list"))