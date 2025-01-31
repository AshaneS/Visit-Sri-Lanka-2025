import CitySmallCard from "@/components/city/CitySmallCard";

function Restuarants() {
  return (
    <main className="max-w-7xl mx-auto px-8">
      {/* Restaurants Section */}
      <section className="pt-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="text-3xl font-bold border col-span-2 pb-4 md:col-span-1">
            <h1>Highlights</h1>
          </div>
          <CitySmallCard className="bg-purple-200" />
          <CitySmallCard className="bg-indigo-500" />
          <CitySmallCard className="bg-orange-600" />
          <CitySmallCard className="bg-red-500" />
          <CitySmallCard className="bg-green-300" />
        </div>
      </section>

      {/* Highlights Section */}

      <section className="pt-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <h1 className="text-2xl font-medium">Basel at a glance</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-xl font-medium">This is Basel</h1>
            <p>
              Basel’s old town is an absolutely must. You will discover
              picturesque alleyways and over 200 fountains. Highlights include
              the town hall and the cathedral. From the vantage point of the
              Pfalz viewing terrace, you can look out over the old town to the
              point where three countries converge. You will find art wherever
              you go in Basel’s city centre, for example the Tinguely Fountain.
              Are you an architecture fan? Look no further than Messe Basel and
              the Roche Towers, both buildings designed by star architects
              Herzog & de Meuron or the Novartis campus. Last but not least, the
              “Mittlere Brücke”, one of the oldest bridges over the Rhine, is a
              must when visiting Basel.{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-xl font-medium">Discover Basel</h1>
            <p>
              Basel has the highest density of museums and countless galleries.
              The Kunstmuseum Basel presents art from the past 700 years. The
              Museum Tinguely shows the extensive collection of works of art and
              sculptures by Swiss artist Jean Tinguely. Art Basel is a major
              event held every June. It is considered one of the world’s leading
              art fairs and presents works from the 20th and 21st centuries.{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-xl font-medium">Basel, city of culture</h1>
            <p>
              Basel has the highest density of museums and countless galleries.
              The Kunstmuseum Basel presents art from the past 700 years. The
              Museum Tinguely shows the extensive collection of works of art and
              sculptures by Swiss artist Jean Tinguely. Art Basel is a major
              event held every June. It is considered one of the world’s leading
              art fairs and presents works from the 20th and 21st centuries.{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-xl font-medium">In and around Basel</h1>
            <p>
              Riehen is about 30 minutes from Basel. It is home to one of
              Switzerland’s most important museums – the Fondation Beyeler. The
              museum presents modern and contemporary art. Equally close to
              Basel are the Roman ruins of Augusta Raurica. If nature is your
              thing, the Basel Jura is popular for hikes and climbing tours
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <h1 className="text-xl font-medium">Experience Basel for less</h1>
            <p>
              Stay overnight in Basel and receive discounts on many leisure and
              cultural activities with the BaselCard. This gives you a 50%
              discount on admission to Basel Zoo, a city tour or a boat trip. In
              addition, you can travel free of charge by bus and tram.
            </p>
          </div>
        </div>
      </section>

      {/* Impressions Section */}


      
    </main>
  );
}
export default Restuarants;
