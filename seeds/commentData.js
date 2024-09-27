const { Comment } = require("../models");
const commentData = [
  {
    content: "woah is this another blog!!!",
    post_id: 1,
    user_id: 2,
  },
  {
    content: "I like to comment :)",
    post_id: 1,
    user_id: 4,
  },
  {
    content: "I can post my thoughts!",
    post_id: 2,
    user_id: 5,
  },
];
const seedComments = async () => {
  await Comment.bulkCreate(commentData);
};
module.exports = seedComments;
