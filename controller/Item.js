const db = require('../models');

const getAllProduct = async (req, res) => {
  const productAll = await db.Product.findAll();
  res.status(200).send(productAll);
};

const getItem = async (req, res) => {
  const myId = Number(req.user.id);
  const postId = Number(req.params.post_id);
  const { name, price, stock } = req.body;

  const targetPost = await db.Product.findOne({ where: { id: product_id } });

  if (targetPost) {
    const newComment = await db.Comment.create({
      comment,
      post_id: postId,
      user_id: myId,
    });

    res.status(201).send(newComment);
  } else {
    res.status(404).send({ message: `Post Not Found` });
  }
};
const selectItem = async (req, res) => {
  const commentId = Number(req.params.comment_id);
  const targetComment = await db.Comment.findOne({ where: { id: commentId } });

  if (targetComment && targetComment.user_id === req.user.id) {
    await targetComment.destroy();
    res.status(204).send();
  } else {
    res.status(400).send({ message: `Something went wrong.` });
  }
};
const deleteItem = async (req, res) => {
  const commentId = Number(req.params.comment_id);
  const targetComment = await db.Comment.findOne({ where: { id: commentId } });

  if (targetComment && targetComment.user_id === req.user.id) {
    await targetComment.destroy();
    res.status(204).send();
  } else {
    res.status(400).send({ message: `Something went wrong.` });
  }
};

const editItem = async (req, res) => {
  const commentId = Number(req.params.id);
  const { comment } = req.body;
  const targetComment = await db.Comment.findOne({ where: { id: commentId } });

  if (targetComment && targetComment.user_id === req.user.id) {
    await targetComment.update({ comment });
    res.status(200).send();
  } else {
    res.status(400).send({ message: `Something went wrong.` });
  }
};
module.exports = {
  getItem,
  selectItem,
  editItem,
  deleteItem,
};
