// Components / Widgets
import TopBar from "@/widgets/TopBar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/widgets/Footer";
import Galeria from "@/components/Galeria";
import { Accommodation, fetchDatApi } from "@/data/fetchDataApi";

// Data
import AccomodationDetails from "@/components/AccomodationDetails";
import AccomodationFeedback from "@/components/AccomodationFeedback";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { accommodation } = await fetchDatApi();

  const actualAccommodation: Accommodation | undefined = accommodation.find(
    (accommodation) => accommodation.slug === id
  );

  // Caso não encontre a acomodação atual
  if (!actualAccommodation) {
    return (
      <>
        <header className="container mx-auto">
          <TopBar />
          <SearchBar />
        </header>
        <hr className="mt-2" />
        <main className="container mx-auto mb-6">
          <h1 className="text-3xl font-semibold py-4">
            Projeto em continuação (Volte e clique nas fotos, não nos ícones!)
          </h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>
      <hr className="mt-2" />
      <main className="container mx-auto mb-6">
        <h1 className="text-3xl font-semibold py-4">
          {actualAccommodation.title}
        </h1>
        <Galeria pictures={actualAccommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccomodationDetails actualAccommodation={actualAccommodation} />
          <AccomodationFeedback actualAccommodation={actualAccommodation} />
        </div>
      </main>
      <Footer />
    </>
  );
}
