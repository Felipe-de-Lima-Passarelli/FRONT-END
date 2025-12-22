//Next
import Link from "next/link";

const ParamURL = () => {
  return (
    <div className="mt-2">
      <h2 className="my-2">Módulo 3 - Parâmetros na URL</h2>
      <Link
        href="/params?name=Felipe"
        className="bg-gray-700 p-2 rounded-full text-white font-semibold hover:bg-gray-500"
      >
        Parâmetros na URL
      </Link>
    </div>
  );
};

export default ParamURL;
