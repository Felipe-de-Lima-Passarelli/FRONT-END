//Data
import { Posts } from "@/data/postsData";

//Interfaces
interface pageProps {
  params: Promise<{ id: string }>;
}

interface actualPost {
  id: number;
  title: string;
  text: string;
}

//Components
import Button from "@/components/Button";

const Page = async ({ params }: pageProps) => {
  const { id } = await params;
  const data = Posts;
  const actualPost: actualPost | undefined = data.find(
    (post) => post.id.toString() === id
  );

  if (!actualPost) {
    return (
      <div>
        <div className="border-2 m-2 w-150">
          <h1 className="text-2xl font-semibold mx-1">Este post não existe</h1>
          <p className="mx-4 mb-10 text-xl">Error 404</p>
        </div>
        <div className="my-4 mx-2">
          <Button href="/" text="Home" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="border-2 m-2 w-150">
        <h1 className="text-2xl font-semibold mx-1">{actualPost.title}</h1>
        <p className="mx-4 mb-10 text-xl">{actualPost.text}</p>
      </div>
      <div className="my-4 mx-2">
        <Button href="/" text="Home" />
      </div>
    </div>
  );
};

export default Page;
