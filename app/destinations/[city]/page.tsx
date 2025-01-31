import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel";
import LargeCard from "@/components/LargeCard";
import SmallCard from "@/components/SmallCard";
import destinationJson from "@/data/DestinationData.json";

interface DestinationProps {
  params: Promise<{ city: string }>;
}

async function Destinations({ params }: DestinationProps) {
  const params_1 = await params;
  const destinationData = destinationJson.find(
    (destination) =>
      destination.city.toLowerCase() === params_1.city.toLowerCase()
  );

  // console.log(destinationData);

  if (!destinationData) {
    return <div>City not found</div>;
  }

  // const destinationData = destinationJson[0];

  return (
    <div className="text-center">
      <Banner />
      <main className="max-w-7xl mx-auto px-8">
        <section className="mt-6">
          <div className="text-xl text-left font-light mt-6 mb-6">
            <p>{destinationData.main_description}</p>
          </div>
        </section>
        <section>
          <div>
            <div className="text-[55px] font-medium tracking-wide leading-tight mt-8 mb-8 text-left text-orange-500">
              <h1>Experience {destinationData.city} like a Local</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 grid-flow-row-dense">
            <SmallCard className="bg-blue-400" />
            <SmallCard className="bg-indigo-500" />
            <LargeCard className="col-span-2 bg-yellow-300" />
            <SmallCard className="bg-blue-400" />
            <SmallCard className="bg-indigo-500" />
            <LargeCard className="col-span-2 bg-yellow-300" />
          </div>
        </section>

        <section className="pt-6">
          <div className="flex flex-col gap-8 text-left">
            <div className="flex flex-col sm:flex-row gap-4">
              <h1 className="text-2xl font-medium ">
                {destinationData.city} at a glance
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">{destinationData.title0}</h1>
              <p>{destinationData.paragraphs0}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium"></h1>
              <h1 className="text-xl font-medium">{destinationData.title1}</h1>
              <p>{destinationData.paragraphs1}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">{destinationData.title2}</h1>
              <p>{destinationData.paragraphs2}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">{destinationData.title3}</h1>
              <p>{destinationData.paragraphs3}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-medium">{destinationData.title4}</h1>
              <p>{destinationData.paragraphs4}</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE AND ACTIVITIES */}

        {/* HOTELS */}

        <section className="mb-10 py-2">
          <Carousel />
        </section>
      </main>
    </div>
  );
}
export default Destinations;
