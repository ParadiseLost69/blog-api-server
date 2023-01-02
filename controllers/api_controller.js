const express = require("express");

exports.get_posts = (req, res, next) => {
  res.send({ message: "This is the posts page" });
};
