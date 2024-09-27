const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    if (!req.session.user_id) {
      res.render("dashboard", {
        message: "Please log in to view the dashboard",
      });
      return;
    }

    const userData = await User.findByPk(req.session.user_id);
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [
        { model: Comment, include: [{ model: User }] },
        { model: User },
      ],
    });

    const user = userData ? userData.get({ plain: true }) : null;
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      user,
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/new", (req, res) => {
  try {
    res.render("new-post", {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    console.error("Error rendering new post page:", err);
    res.status(500).json({ error: "Failed to render new post page" });
  }
});

module.exports = router;
