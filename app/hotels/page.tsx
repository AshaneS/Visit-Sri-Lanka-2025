import LargeHotelCard from "@/components/LargeHotelCard";

function page() {
  return (
    <main className="max-w-7xl mx-auto px-8">
      <section>
        <div className="flex flex-col text-left gap-4">
          {/* hotel headding */}
          <div className="text-4xl font-bold whitespace-nowrap">
            <h1>Riffelalp Resort 2222m</h1>
          </div>
          {/* hotel stars */}
          <div>
            <h1>Stars</h1>
          </div>
          {/* link to the city page */}
          <div>
            <p>Accomodation : Zermatt</p>
          </div>
        </div>

        {/* Large hotel card  */}

        <div className="mt-6">
          <LargeHotelCard className="bg-emerald-300" />
        </div>
      </section>

      <section>
        <div className="text-2xl font-normal py-10">
          <p>
            Pristine nature, peace and warmth! The Riffelalp Resort 2222 m is a
            world of its own, far removed from the hustle and bustle of everyday
            life. Most of its 65 double rooms and five top suites have a balcony
            with breathtaking views of the Matterhorn. In the hotel&apos;s&quot;Spa
            2&apos;222m&quot;, moreover, guests can relax in Europe&apos;s highest outdoor
            pool. And just so the palate has something to feast on too, there
            are three different restaurants to provide culinary flights of
            fancy. Plus fantastic skiing and walking right on your doorstep.
          </p>
        </div>

        <div>
          {/* Hotel Image Gallery */}

          
        </div>
      </section>
    </main>
  );
}
export default page;
