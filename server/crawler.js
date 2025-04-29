const axios = require("axios");
const cherrio = require("cheerio")

async function crawler(url, robots, { to_crawl, crawled }) {
    await axios
      .get(url)
      .then(({ data }) => {
        const $ = cherrio.load(data);
        const links = $("a");
          links.each((_, value) => {
              const link = $(value).attr("href");
              if (link) {
                  let newUrl;
                  if (link.match("https?://*")) {
                      const path = new URL($(value).attr("href"));
                      if (link.hostname == path.hostname) {
                          newUrl = link;
                      }
                  } else if (link && link.startsWith("/")) {
                      newUrl = url.protocol + "//" + url.hostname + link;
                  }
                  if (newUrl && !crawled.has(newUrl)) {
                      if (robots.isAllowed(newUrl)) {
                          to_crawl.add(newUrl);
                      } else {
                          crawled.add(newUrl);
                      }
                  }
              }
          })
          return "ok"; 
      });
    return { to_crawl: to_crawl, crawled: crawled };
}




module.exports = { crawler };