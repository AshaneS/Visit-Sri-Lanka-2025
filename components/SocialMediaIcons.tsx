import { BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"
import { PiPinterestLogo } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"

function SocialMediaIcons() {
  return (
    <div className="flex justify-between items-center gap-4">
                  <div className="flex justify-center items-center bg-slate-200 h-9 w-9 rounded-md md:h-12 md:w-12">
                    <RiTwitterXFill size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-9 w-9 rounded-md md:h-12 md:w-12">
                    <FaFacebookF size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-9 w-9 rounded-md md:h-12 md:w-12">
                    <PiPinterestLogo size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-9 w-9 rounded-md md:h-12 md:w-12">
                    <BsYoutube size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-9 w-9 rounded-md md:h-12 md:w-12">
                    <LiaLinkedin size={20} />
                  </div>
                </div>
  )
}
export default SocialMediaIcons