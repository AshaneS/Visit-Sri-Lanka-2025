import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel";
import RectangleCard from "@/components/RectangleCard";
import SquareCard from "@/components/SquareCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="max-w-7xl mx-auto md:px-16 px-6">
        {/* Top Destinations */}
        <section className="pt-6">
          <div>
            <h2 className="text-4xl text-gray-700 font-bold pb-6">
              Top Destinations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <SquareCard
              img="https://images.pexels.com/photos/30379319/pexels-photo-30379319/free-photo-of-colombo-skyline-at-night-with-reflections.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Colombo"
            />
            <SquareCard
              img="https://images.pexels.com/photos/5829043/pexels-photo-5829043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Galle"
            />
            <SquareCard
              img="https://images.pexels.com/photos/4553621/pexels-photo-4553621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="hidden md:block"
              city="Ella"
            />
            <SquareCard
              img="https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="hidden md:block"
              city="Kandy"
            />
            {/* <SquareCard img="https://images.pexels.com/photos/29644512/pexels-photo-29644512/free-photo-of-nine-arch-bridge-in-lush-ella-sri-lanka.jpeg" className="hidden md:block" city="Jaffna" /> */}
          </div>
        </section>

        {/* Top Attractions */}

        <section className="pt-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense">
            <div className="col-span-2  md:col-span-1">
              <h2 className="text-4xl text-gray-700 font-bold pb-6 ">
                Top Attractions
              </h2>
            </div>
            <SquareCard
              img="https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg?auto=compress&cs=tinysrgb&w=400"
              city="Sigiriya"
            />
            <SquareCard
              img="https://images.pexels.com/photos/27669315/pexels-photo-27669315/free-photo-of-a-man-walking-towards-a-lighthouse-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Galle Fort"
            />
            <RectangleCard
              img="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="col-span-2"
              city="Beautiful Beaches"
            />
            <SquareCard
              img="https://images.pexels.com/photos/28673261/pexels-photo-28673261/free-photo-of-spotted-deer-in-lush-sri-lankan-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Yala National Park"
            />
            <SquareCard
              img="https://images.pexels.com/photos/9505333/pexels-photo-9505333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Horton Plains"
            />
          </div>
        </section>

        {/* Things to do */}
        <section className="pt-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-2  md:col-span-1">
              <h2 className="text-4xl text-gray-700 font-bold pb-6">
                Things To do
              </h2>
            </div>
            <SquareCard
              img="https://images.pexels.com/photos/625727/pexels-photo-625727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Wild Life"
            />
            <SquareCard
              img="https://images.pexels.com/photos/8907831/pexels-photo-8907831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Whale Watching"
            />
            <RectangleCard
              img="https://images.pexels.com/photos/29202494/pexels-photo-29202494/free-photo-of-aerial-view-of-avukana-buddha-statue-in-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Ancient Sites"
              className="col-span-2"
            />
            <SquareCard
              img="https://images.pexels.com/photos/5007408/pexels-photo-5007408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              city="Surfing"
            />
            <SquareCard
              img="https://images.pexels.com/photos/2055556/pexels-photo-2055556.jpeg?auto=compress&cs=tinysrgb&w=300"
              city="Hiking"
            />
          </div>
        </section>

        <section>
          <Carousel />
        </section>
      </main>
    </div>
  );
}
