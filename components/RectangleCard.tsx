import Image from "next/image";

interface RectangleCardProps {
  className?: string;
  img: string;
}

function RectangleCard(props: RectangleCardProps) {
  return (
    <div
      className={`${props.className} 
      rounded-xl relative min-h-0 min-w-0 aspect-[212/100] overflow-hidden hover:scale-95 transition duration-500 ease-in-out`}
    >
      <div className="">
        <Image
          src={props.img}
          fill
          alt=""
          style={{ objectFit: "cover" }}
          className="hover:scale-110 transition duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-bold ">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}
export default RectangleCard;
