from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# temporary storage (in-memory)
posts = []

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/posts")
def blog_list():
    return render_template("blog_list.html", posts=posts)


@app.route("/post/<int:post_id>")
def blog_post(post_id):
    if post_id < 0 or post_id >= len(posts):
        return "Post not found", 404

    return render_template("blog_post.html", post=posts[post_id])


@app.route("/add", methods=["GET", "POST"])
def add_post():
    if request.method == "POST":
        title = request.form.get("title")
        content = request.form.get("content")

        if not title or not content:
            return "Title and content required", 400

        posts.append({
            "title": title,
            "content": content
        })

        return redirect(url_for("blog_list"))

    return render_template("add_post.html")


if __name__ == "__main__":
    app.run(debug=True)