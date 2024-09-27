const { Post } = require("../models");

const postData = [
  {
    title: "Why is MVC so important?",
    content:
      "MVC is crucial as it structures the codebase into distinct, manageable sections, simplifying the process of development, maintenance, and scalability of applications.",
    user_id: 1,
  },
  {
    title: "What is ORM?",
    content:
      "Object-Relational Mapping (ORM) offers an efficient method to work with relational databases by applying object-oriented concepts, streamlining database interactions.",
    user_id: 2,
  },
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
