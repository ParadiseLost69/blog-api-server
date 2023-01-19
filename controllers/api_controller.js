const express = require("express");
const Blog = require("../models/blogSchema");
const { validationResult, body } = require("express-validator");
const showdown = require("showdown");
const converter = new showdown.Converter();

exports.get_posts = (req, res, next) => {
  Blog.find({})
    .sort({ created_at: "descending" })
    .exec((err, results) => {
      res.json({ message: "hello", data: results });
    });
};

exports.create_post = [
  body("title", "A body is required").trim(),
  (req, res, next) => {
    const blog = new Blog({
      title: req.body.title,
      body: converter.makeHtml(req.body.body),
      created_at: new Date(),
      edited_at: new Date(),
    });

    Blog.create(blog);
    res.send({ message: "Successfully uploaded blog" });
  },
];
exports.get_post = (req, res, next) => {
  console.log(req.params.postId);

  Blog.findById(req.params.postId, (err, post) => {
    if (err) {
      next(err);
    } else {
      res.json({
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        edited_at: post.edited_at,
      });
    }
  });
};

exports.delete_post = (req, res, next) => {
  Blog.findByIdAndRemove(req.params.postId, (err, results) => {
    if (err) {
      next(err);
    }
    res.json({ message: "Deleted the post" });
  });
};

// exports.get_post = (req, res, next) => {
//   console.log(req.params);

//   res.json({ message: "success" });
// };
