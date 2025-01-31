import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel";
import RectangleCard from "@/components/RectangleCard";
import SquareCard from "@/components/SquareCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="max-w-7xl mx-auto px-8">
        {/* Top Destinations */}
        <section className="pt-6 pb-20 ">
          <div>
            <h2 className="text-4xl text-gray-700 font-bold pb-5">
              Top Destinations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <SquareCard img="https://images.pexels.com/photos/30379285/pexels-photo-30379285/free-photo-of-colombo-skyline-reflected-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" city = "Colombo" />
            <SquareCard img="https://images.pexels.com/photos/27669335/pexels-photo-27669335/free-photo-of-the-old-town-of-santa-fe-with-a-tower-and-a-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" city = "Galle" />
            <SquareCard img="https://images.pexels.com/photos/4553621/pexels-photo-4553621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="hidden md:block" city="Ella" />
            <SquareCard img="https://images.pexels.com/photos/14041994/pexels-photo-14041994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="hidden md:block" city = "Kandy" />
            {/* <SquareCard img="https://images.pexels.com/photos/29644512/pexels-photo-29644512/free-photo-of-nine-arch-bridge-in-lush-ella-sri-lanka.jpeg" className="hidden md:block" city = "Jaffna" /> */}
          </div>
        </section>

        {/* Top Attractions */}

        <section className="pt-6 pb-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense">
            <div className="col-span-2  md:col-span-1">
              <h2 className="text-4xl text-gray-700 font-bold pb-5 ">
                Top Attractions
              </h2>
            </div>
            <SquareCard img="https://images.pexels.com/photos/13391116/pexels-photo-13391116.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <SquareCard img="https://images.pexels.com/photos/27669335/pexels-photo-27669335/free-photo-of-the-old-town-of-santa-fe-with-a-tower-and-a-path.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <RectangleCard
              img="https://images.pexels.com/photos/17050614/pexels-photo-17050614/free-photo-of-boats-on-a-lake-among-rocky-hills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="col-span-2"
            />
            <SquareCard img="https://images.pexels.com/photos/28673261/pexels-photo-28673261/free-photo-of-spotted-deer-in-lush-sri-lankan-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <SquareCard img="https://images.pexels.com/photos/29644512/pexels-photo-29644512/free-photo-of-nine-arch-bridge-in-lush-ella-sri-lanka.jpeg" />
          </div>
        </section>

        {/* Things to do */}
        <section>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            <div className="col-span-2  md:col-span-1">
              <h2 className="text-4xl text-gray-700 font-bold pb-5">
                Things To do
              </h2>
            </div>
            <SquareCard img="https://images.pexels.com/photos/322480/pexels-photo-322480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <SquareCard img="https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <RectangleCard
              img="https://images.pexels.com/photos/18727240/pexels-photo-18727240/free-photo-of-fortress-in-sunlight-on-sri-lanka.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="col-span-2"
            />
            <SquareCard img="https://images.pexels.com/photos/6623875/pexels-photo-6623875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <SquareCard img="https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </section>

        <section>
          <Carousel />
        </section>
      </main>
    </div>
  );
}
