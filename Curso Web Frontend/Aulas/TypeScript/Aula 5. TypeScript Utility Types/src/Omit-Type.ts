interface Article {
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  public: boolean;
}

//Omit Type extenderá apenas as propriedades desejadas
interface ArticlePreview extends Omit<Article, "subtitle" | "description"> {}

const articlePreview: ArticlePreview = {
  title: "Dominando o TypeScript",
  createdAt: new Date("2025-12-08"),
  public: true,
};

console.log(articlePreview);
