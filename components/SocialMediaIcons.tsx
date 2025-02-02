import { BsYoutube } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"
import { PiPinterestLogo } from "react-icons/pi"
import { RiTwitterXFill } from "react-icons/ri"

function SocialMediaIcons() {
  return (
    <div className="flex justify-between items-center gap-4">
                  <div className="flex justify-center items-center bg-slate-200 h-12 w-12 rounded-md">
                    <RiTwitterXFill size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-12 w-12 rounded-md">
                    <FaFacebookF size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-12 w-12 rounded-md">
                    <PiPinterestLogo size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-12 w-12 rounded-md">
                    <BsYoutube size={20} />
                  </div>
                  <div className="flex justify-center items-center bg-slate-200 h-12 w-12 rounded-md">
                    <LiaLinkedin size={20} />
                  </div>
                </div>
  )
}
export default SocialMediaIcons