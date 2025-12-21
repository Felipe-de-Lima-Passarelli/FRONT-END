//Next
import Link from "next/link";

//Data
import { Posts } from "@/data/postsData";

const NavData = () => {
  const data = Posts;

  return (
    <div>
      <h2>Navegação Dinâmica</h2>
      <ul className="flex flex-row gap-4 m-2">
        {data.map((post) => (
          <li key={post.id}>
            <Link
              href={`/postsNav/${post.id}`}
              className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavData;
