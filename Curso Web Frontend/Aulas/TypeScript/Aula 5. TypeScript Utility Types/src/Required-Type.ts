interface Article {
  title: string;
  subtitle: string;
  description: string;
  createdAt?: Date;
  public?: boolean;
}

//Required Type deixará todas propriedades como obrigatórias
const completedArticle: Required<Article> = {
  title: "Título",
  subtitle: "Subtítulo",
  description: "Descrição",
  createdAt: new Date("2025-12-08"),
  public: true,
};

//createdAt e public se tornam obrigatórias com o required
