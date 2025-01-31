import Image from "next/image";

function page() {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-8">
        <section className="mt-6">
          <div className="flex flex-col gap-2">
            <div className="text-4xl text-start pb-8">
              <h1>
                From Lucerne: morning tour Lake Lucerne with rubber dinghy
              </h1>
            </div>
            <div className="relative h-full max-w-full min-w-0 aspect-[177/100] rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/165549/pexels-photo-165549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Lake Lucerne"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="text-center bg-slate-300 py-7 rounded-xl justify-center items-center">
              <h1>Reservation</h1>
            </div>

            <div>
              <p>
                Sail on this morning tour in a RIB across Lake Lucerne and
                experience the dreamlike scenery. You will visit the village of
                Weggis, approach the Bürgenstock and relax on and in Lake
                Lucerne.
              </p>
            </div>

            <div className="flex flex-col gap-2 mb-12"> 
             <div className="py-6 border-b-2">
              <h1>Offer Details</h1>
             </div>
             <div className="py-6 border-b-2">
              <h1>Offer Validity</h1>
             </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default page;
