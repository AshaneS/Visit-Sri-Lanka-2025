import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import SocialMediaIcons from "../SocialMediaIcons";
import NewsLetterButton from "../NewsLetterButton";

function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-8 pb-16 md:px-16">
        {/* borer component _1 */}
        <div className="pb-4">
          <div className="flex flex-col gap-4">
            <div className="border-b border-gray-200">
              <h1 className="text-lg font-medium">Legal Information</h1>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
              <p className="border-gray-200 border-b">Terms of use</p>
              <p className="border-gray-200 border-b">Data protection</p>
              <p className="border-gray-200 border-b">Cookies</p>
              <p className="border-gray-200 border-b">imprint</p>
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="mb-4">
          <div className="py-3 px-4 bg-gray-200 rounded-full flex justify-left items-center gap-4">
            <div className="">
              <MagnifyingGlassIcon className="h-8 w-8 text-gray-500" />
            </div>
            <button className="text-lg font-medium text-gray-500">
              Search
            </button>
          </div>
        </div>

        {/* <div className="flex gap-4">
          <div className="text-sm text-gray-700 font-medium">
            <p>News Letter</p>
          </div>
          <div className="text-sm text-gray-700 font-medium">Follow us</div>
        </div> */}

        {/* newlestter button */}

        <div className="pt-0 flex flex-row justify-between items-center gap-8">
          <div className="hidden flex-col justify-center items-left gap-3 md:inline-flex">
            <div className="text-sm text-gray-700 font-medium">
              <p>News Letter</p>
            </div>
            <div>
              <NewsLetterButton />
            </div>
          </div>

          <div className="">
            <div className="py-4 text-gray-700 flex flex-col justify-center items-start gap-3">
              <div className="text-sm text-gray-700 font-medium">Follow us</div>
              {/* social media icon*/}
              <SocialMediaIcons />
            </div>
          </div>
        </div>

        <div className="">
          <div className="h-[100] border-b-[1px] border-gray-300"></div>
          <div className="h-[75] border-b-[1px] border-gray-300 flex justify-between items-center text-sm text-gray-700">
            <p>@2025 Sri Lanka Tourism</p>
            <div className="flex gap-3 justify-between items-center">
              <p>Language</p>
              <div>
                <p className="bg-red-300 rounded-3xl w-[100px] h-[45px] flex items-center justify-center font-bold">select</p>
              </div>
            
            </div>
          </div>
          <div className="h-[75] border-b-[1px] border-gray-300"></div>
        </div>

        {/* social media */}
      </div>
    </footer>
  );
}
export default Footer;
