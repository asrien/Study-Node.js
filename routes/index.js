const express = require("express");
const router = express();

const Post = require("./post");

router.use("/post", Post);

module.exports = router;
