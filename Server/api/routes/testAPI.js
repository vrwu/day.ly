// import { router } from "../app";

const { json } = require("express");
var express = require("express");
var router=express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly YUUUUUUHHH");
});

module.exports=router;