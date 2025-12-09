interface Article {
  title: string;
  subtitle?: string;
}

const articles: Readonly<Article>[] = [
  { title: "1", subtitle: "Subtitle 1" },
  { title: "2" },
  { title: "3", subtitle: "Subtitle 3" },
];

/* -> Readonly Type não permitirá mudanças no articles

  if (articles[1]) {
    articles[1].title = "Mudando o título";
  }

*/

console.log(articles);
