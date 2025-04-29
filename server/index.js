const crawler = require("./crawler");
const express = require('express');
const router = express.Router();
const app = express();
const robotsParser = require('robots-parser');
const axios = require("axios");

const cors = require("cors");
app.use(cors());
app.use(express.json());


const route = router.post("/crawler", async (req, res) => {
    const url = (new URL(req.body.url));
    let sets = { to_crawl: new Set(), crawled: new Set() };
    sets.to_crawl.add(req.body.url);
    robots = await axios.get(url.protocol + "//" + url.hostname + "/robots.txt").then(({ data }) => 
        robotsParser(url.protocol + "//" + url.hostname + "/robots.txt", data));
    let websites
    let limit = 50
    while (sets.to_crawl.size > 0 && limit > 0) {
      interator = sets.to_crawl.values();
      for (const link of interator) {
        if (limit > 0) {
          sets.crawled.add(link);
          sets.to_crawl.delete(link);
          sets = await crawler
            .crawler(new URL(link), robots, sets)
            .then((sets) => sets);
          limit = limit - 1;
        } else {
          interator = [];
        }
      }
    }
    res.json([...sets.crawled, ...sets.to_crawl]);
});

app.use("/", route);


app.listen(5000, () => {
    console.log("Server running on port 5000");
});