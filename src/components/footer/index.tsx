import { BiLinkExternal } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="fixed bottom-0 mt-6 mb-6 w-full text-gray-500">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <p>
            Made with <span className="text-red-600">❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
