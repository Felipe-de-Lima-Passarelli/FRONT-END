//Components
import Button from "./Button";

//Data
import { Posts } from "@/data/postsData";

const NavData = () => {
  const data = Posts;

  return (
    <>
      <h2 className="mt-2">Módulo 2 - Navegação Dinâmica</h2>
      <ul className="flex flex-row gap-4 my-2">
        {data.map((post) => (
          <li key={post.id}>
            <Button href={`/postsNav/${post.id}`} text={post.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavData;
