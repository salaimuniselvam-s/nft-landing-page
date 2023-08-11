import logo from "../assets/logo.png";

const company = [
  "Vision",
  "Mission",
  "Core Values",
  "Contact Us",
  "Branding",
  "Team",
  "Careers",
  "FAQ",
];

const products = [
  "Eda Token",
  "Digital Clinic",
  "School of Cryptos",
  "Lite Paper",
  "White Paper",
  "Welfare Donations",
  "How to Use Edaface",
];

const legal = ["Terms of Use", "Privacy Policy", "Disclaimers", "Listing T&C"];

const communities = ["Facebook", "Instagram", "Telegram", "Twitter"];

export const Footer = () => {
  return (
    <footer className=" max-w-1600 mx-auto text-center  lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-2 md:grid-cols-2 lg:grid-cols-4 justify-center-center">
          <div className="flex flex-col  gap-2">
            <h3 className="text-blue-900 font-bold text-xl">Company</h3>
            {company.map((items) => {
              return (
                <p key={items} className="cursor-pointer hover:text-blue-700">
                  {" "}
                  {items}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="text-blue-900 font-bold text-xl">Products</h3>
            {products.map((items) => {
              return (
                <p key={items} className="cursor-pointer hover:text-blue-700">
                  {" "}
                  {items}
                </p>
              );
            })}
          </div>

          <div className="flex flex-col  gap-2">
            <h3 className="text-blue-900 font-bold text-xl">Legal</h3>
            {legal.map((items) => {
              return (
                <p key={items} className="cursor-pointer hover:text-blue-700">
                  {" "}
                  {items}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="text-blue-900 font-bold text-xl">Communities</h3>
            {communities.map((items) => {
              return (
                <p key={items} className="cursor-pointer hover:text-blue-700">
                  {" "}
                  {items}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center mt-3">
          <div className="max-w-lg w-full">
            <h3 className="text-blue-800 my-2 self-start font-bold text-lg">
              Subscribe our Newsletter
            </h3>
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 focus:outline-none"
                  placeholder="Enter Email Id.."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="p-6 text-center border-t-2 border-gray-200">
        <span>
          Copyright © 2022. Edaface is a product of EDA Holdings.All Rights
          Reserve{" "}
        </span>
      </div>
    </footer>
  );
};
