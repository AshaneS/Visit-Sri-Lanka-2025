import Image from "next/image";

function RectangleCard({
  className,
  img,
  city,
}: {
  className?: string;
  img: string;
  city: string;
}) {

  if (!city) {
    console.error("City is undefined or missing");
  }
  return (
    <div
      className={`${className} 
      rounded-xl relative min-h-0 min-w-0 aspect-[212/100] overflow-hidden hover:scale-95 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]`}
    >
      <div className="">
        <Image
          src={img}
          fill
          alt=""
          style={{ objectFit: "cover" }}
          className="hover:scale-110 transition duration-500 ease-[cubic-bezier(.11,.74,.35,.92)]"
        />
        {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold ">
          <h1>{city}</h1>
        </div>
      </div>
    </div>
  );
}
export default RectangleCard;
