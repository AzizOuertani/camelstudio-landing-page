import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href={""} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">linkedin</span>
            <FaLinkedin
              className="h-6 w-6 "
              fill={"#0077b5"}
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 CamelStudio, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
