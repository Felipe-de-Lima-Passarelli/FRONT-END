// Icones tabler: npm install @tabler/icons-react

//Components / Widgets
import TopBar from "@/widgets/TopBar";
import SearchBar from "@/components/SearchBar";
import Main from "@/widgets/Main";
import Footer from "@/widgets/Footer";
import { fetchDatApi } from "@/data/fetchDataApi";

export default async function Home() {
  const { accommodation, icons } = await fetchDatApi();
  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>
      <hr className="my-6" />
      <Main accommodation={accommodation} icons={icons} />
      <Footer />
    </>
  );
}
