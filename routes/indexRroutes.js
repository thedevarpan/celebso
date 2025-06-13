const express = require("express");
const router = express.Router();

/* Home page routes*/ 
router.get("/", (req, res) => {
  res.render("index", {
    metaTitle: "Home - celebso | Best Social Media For Influiencers",
    metaDescription: "Celebso is the ultimate platform for Entrepreneur, Startups and influencers to connect, collaborate, and grow together.",
    metaKeywords: "Startups, Platform for Entrepreneur, Influencers social media, Social Media For Influiencers",
    ogImage: "/assets/images/banner.jpg",
    pageUrl: req.protocol + "://" + req.get("host") + req.originalUrl
  });
});


module.exports = router;
