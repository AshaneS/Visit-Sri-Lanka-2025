import Banner from "@/components/Banner/Banner";
import SmallCard from "@/components/SmallCard";

function page() {
  return (
    <div className="mb-40">
      <Banner />
      <main className="max-w-7xl mx-auto px-8">
        <section className="mt-6">
          <div className="text-xl text-justify font-light mt-6 mb-6 text-gray-900 md:text-3xl md:font-normal lg:font-medium">
            <p>
              No matter if you&apos;re seeking golden beaches, misty mountains,
              vibrant cities, or tranquil countryside, Sri Lanka offers it all.
              Whether you&apos;re traveling solo, with a partner, or with
              family, this island paradise, rich in culture and natural beauty,
              has the perfect destination waiting for you.
            </p>
          </div>
        </section>

        {/* cities */}
        <div className="md:flex flex-col gap-9 ">
          <section>
            <div className="flex flex-col gap-3 md:grid grid-cols-2 md:items-center md:gap-10">
              <div className="py-4 md:order-2">
                <h1 className="text-3xl font-medium py-4 md:text-5xl">
                  Cities
                </h1>
                <p className="text-base font-light text-gray-700">
                  Sri Lanka&apos;s cities, though compact, blend rich history
                  with modern charm. Wander through vibrant streets lined with
                  colonial architecture, explore bustling markets, and enjoy an
                  abundance of parks and gardens – all just a stone&apos;s throw
                  away from the heart of the city.
                </p>
              </div>

              <div className="md:order-1">
                <SmallCard img="https://images.pexels.com/photos/2239999/pexels-photo-2239999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </section>
          {/* beaches */}
          <section>
            <div className="flex flex-col gap-3 md:grid grid-cols-2 md:items-center md:gap-10">
              <div className="py-4">
                <h1 className="text-3xl font-medium py-4 md:text-5xl">
                  Beaches & Coastal Getaways
                </h1>
                <p className="text-base font-light text-gray-700">
                  Sri Lanka&apos;s cities, though compact, blend rich history
                  with modern charm. Wander through vibrant streets lined with
                  colonial architecture, explore bustling markets, and enjoy an
                  abundance of parks and gardens – all just a stone&apos;s throw
                  away from the heart of the city.
                </p>
              </div>

              <SmallCard img="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </section>

          {/* Hill COuntry */}

          <section>
            <div className="flex flex-col gap-3 md:grid grid-cols-2 md:items-center md:gap-10">
              <div className="py-4 md:order-3">
                <h1 className="text-3xl font-medium py-4 md:text-5xl">
                  Hill Country & Tea Plantations
                </h1>
                <p className="text-base font-light text-gray-700">
                  Escape to Sri Lanka&apos;s picturesque hill country, where
                  lush green tea plantations stretch as far as the eye can see.
                  With cool temperatures and breathtaking views, the region is
                  perfect for relaxing retreats, scenic hikes, and immersing
                  yourself in the island&apos;s rich tea culture. Discover the
                  serene beauty of rolling hills and quaint villages tucked away
                  in the mountains.
                </p>
              </div>

              <SmallCard img="https://images.pexels.com/photos/26969138/pexels-photo-26969138/free-photo-of-river-trees-and-forest-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </section>

          {/* festival and culture */}

          <section>
            <div className="flex flex-col gap-3 md:grid grid-cols-2 md:items-center md:gap-10">
              <div className="py-4 ">
                <h1 className="text-3xl font-medium py-4 md:text-5xl">
                  Festivals & Local Culture
                </h1>
                <p className="text-base font-light text-gray-700">
                  Sri Lanka&apos;s vibrant festivals and rich cultural heritage
                  offer a colorful and immersive experience. From the grandeur
                  of the Kandy Perahera to lively local celebrations,
                  you&apos;ll find a deep connection to ancient traditions,
                  music, dance, and rituals. These festivals bring communities
                  together, making it the perfect way to experience the
                  island&apos;s true spirit.
                </p>
              </div>

              <div className="md:order-2">
                <SmallCard img="https://images.pexels.com/photos/24974609/pexels-photo-24974609/free-photo-of-people-wearing-costumes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default page;
