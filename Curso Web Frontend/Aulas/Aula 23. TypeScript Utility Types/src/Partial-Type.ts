interface Article {
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  public: boolean;
}

//Com o Partial Type, todas propriedades ficam opcionais
interface PartialArticle extends Partial<Article> {}

const partialArticle: PartialArticle = {
  title: "Apenas Título - Partial Type",
};

console.log(partialArticle);
