from flask import Blueprint, render_template, request, redirect, url_for
from extensions import db
from models import Post
from datetime import datetime

blog_bp = Blueprint("blog", __name__, url_prefix="/blog")



# ── BLOG LIST ───────────────────────────────────
@blog_bp.route("/")
def blog_list():
    posts = Post.query.order_by(Post.date.desc()).all()
    return render_template("blog_list.html", posts=posts)


# ── SINGLE POST ────────────────────────────────
@blog_bp.route("/post/<int:id>")
def blog_post(id):
    post = Post.query.get_or_404(id)
    return render_template("blog_post.html", post=post)


# ── ADD POST ───────────────────────────────────
@blog_bp.route("/add", methods=["GET", "POST"])
def add_post():
    if request.method == "POST":
        post = Post(
            title=request.form["title"],
            content=request.form["content"],
            author=request.form.get("author", "Admin")
        )

        db.session.add(post)
        db.session.commit()

        return redirect(url_for("blog.blog_list"))

    return render_template("add_post.html")


# ── EDIT POST ──────────────────────────────────
@blog_bp.route("/edit/<int:id>", methods=["GET", "POST"])
def edit_post(id):
    post = Post.query.get_or_404(id)

    if request.method == "POST":
        post.title = request.form["title"]
        post.content = request.form["content"]
        post.author = request.form.get("author", post.author)

        db.session.commit()
        return redirect(url_for("blog.blog_list"))

    return render_template("edit_post.html", post=post)


# ── DELETE POST ────────────────────────────────
@blog_bp.route("/delete/<int:id>", methods=["POST"])
def delete_post(id):
    post = Post.query.get_or_404(id)

    db.session.delete(post)
    db.session.commit()

    return redirect(url_for("blog.blog_list"))