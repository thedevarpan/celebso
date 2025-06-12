const express = require("express");
const router = express.Router();

/* Home page routes*/ 
router.get("/", (req, res) => {
  res.render("index", {
    metaTitle: "Home - celebso | Best Social Media For Influiencers",
    metaDescription: "We build high-performance websites with Node.js, EJS, MongoDB, and Tailwind CSS. Contact us for professional web solutions.",
    metaKeywords: "web development, node.js, ejs, mongodb, flowmazon, tailwind, seo",
    ogImage: "https://yourdomain.com/assets/images/banner.jpg",
    pageUrl: req.protocol + "://" + req.get("host") + req.originalUrl
  });
});


module.exports = router;
