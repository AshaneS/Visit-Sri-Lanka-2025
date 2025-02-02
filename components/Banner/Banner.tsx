import Image from "next/image"

function Banner() {
  return (
    <div className=" relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
     <Image 
     src="https://images.pexels.com/photos/16508233/pexels-photo-16508233/free-photo-of-tangalle-beach-sri-lanka-drone-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
     alt="banner" 
     fill className="object-cover"
     />

     {/* <div className="absolute top-1/2 w-full text-center bg-white/70 text-black">
      <p>Not Sure where to go? </p>
     </div> */}
    </div>
  )
}
export default Banner