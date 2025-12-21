//Next
import Link from "next/link";

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
          <p className="mx-4 mb-10 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            tenetur? Assumenda sed fugiat delectus animi? Reiciendis autem
            accusantium quas quo inventore, officia molestias, ut repellat
            eveniet sequi laboriosam. Provident, iste?
          </p>
        </div>
        <Link
          href="/"
          className="bg-gray-700 p-2 mx-2 rounded-full text-white font-semibold hover:bg-gray-500"
        >
          Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="border-2 m-2 w-150">
        <h1 className="text-2xl font-semibold mx-1">{actualPost.title}</h1>
        <p className="mx-4 mb-10 text-xl">{actualPost.text}</p>
      </div>
      <Link
        href="/"
        className="bg-gray-700 p-2 mx-2 rounded-full text-white font-semibold hover:bg-gray-500"
      >
        Home
      </Link>
    </div>
  );
};

export default Page;
