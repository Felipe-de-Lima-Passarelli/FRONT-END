//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchCity from "@/components/SearchCity";

export default function Home() {
  return (
    <>
      <div className="m-15">
        <Header />
        <SearchCity />
      </div>
      <Footer />
    </>
  );
}
