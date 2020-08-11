const db = require('../models');

const getAllProduct = async (req, res) => {
  const productAll = await db.Product.findAll();
  res.status(200).send(productAll);
};

const targetCategory = async (req, res) => {
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

const filterName = async (req, res) => {
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
  getAllProduct,
  targetCategory,
  filterName,
};
