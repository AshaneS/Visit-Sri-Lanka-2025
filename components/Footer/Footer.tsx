function Footer() {
  return (
    <footer className="w-full">
      <div className="flex flex-col inset-x-0 bottom-0 mt-12 py-10 p-6">
        <div className="flex flex-col gap-3 text-left font-normal text-lg">
          <div>
            <div className="mb-4"></div>
            <ul className="text-lg flex flex-col gap-1 underline ">
              <li>Legal Information</li>
              <li>Contact</li>
              <li>Newsletter</li>
            </ul>

            <div className="flex flex-col gap-6">
              <h1>Follow us</h1>
              <div>icons</div>
            </div>

            <div>@2025 Travel Lanka</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
