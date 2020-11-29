import { cheerio } from "./deps.ts";

type CHERIO = {
  load: any;
};

class Article {
  text: string;
  image: string;
  constructor(text: string, image: string) {
    this.text = text;
    this.image = image;
  }
}

const URL_MARCA =
  "https://www.marca.com/futbol/primera-division.html?intcmp=MENUPROD&s_kw=primera-division";

export const scrapperExp = async (req: any, res: any) => {
  const ch: CHERIO = <CHERIO>cheerio;

  const resCh = await fetch(URL_MARCA, {
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  });

  const html = await resCh.text();
  const $ = ch.load(html, { decodeEntities: false });

  const articles = $("ul.auto-items li.content-item");

  const listArticles: Array<Article> = Object.values(articles)
    .filter((article: any) => article.type === "tag")
    .map((article: any) => {
      const imgArticle = $(article).find("figure a img").attr("src");
      const textArticle = $(article).find("header h3 a").text().trim();
      return new Article(textArticle, imgArticle);
    });

  res.setStatus(200).json(listArticles);
};
