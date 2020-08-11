const db = require('../models');

const getOrder = async (req, res) => {
  const productAll = await db.Product.findAll();
  res.status(200).send(productAll);
};

const selectOrder = async (req, res) => {
  const commentId = Number(req.params.comment_id);
  const targetComment = await db.Comment.findOne({ where: { id: commentId } });

  if (targetComment && targetComment.user_id === req.user.id) {
    await targetComment.destroy();
    res.status(204).send();
  } else {
    res.status(400).send({ message: `Something went wrong.` });
  }
};
const deleteOrder = async (req, res) => {
  const commentId = Number(req.params.comment_id);
  const targetComment = await db.Comment.findOne({ where: { id: commentId } });

  if (targetComment && targetComment.user_id === req.user.id) {
    await targetComment.destroy();
    res.status(204).send();
  } else {
    res.status(400).send({ message: `Something went wrong.` });
  }
};

const editOrder = async (req, res) => {
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
  getOrder,
  selectOrder,
  editOrder,
  deleteOrder,
};
