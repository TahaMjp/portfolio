import {
  FileText,
  Github,
  Instagram,
  Mail,
  Send,
  Smartphone,
} from "lucide-react";

const Accounts = () => {
  return (
    <div className="backdrop-blur-md shadow-lg shadow-black/50 bg-white/10 rounded-xl p-6 w-10/12 mx-auto text-center text-white mt-10 border-white/20 mb-32">
      <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
      <div className="grid grid-cols-3 gap-3 text-white/90 tracking-wide">
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a>
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Smartphone />
        </a>
        <a
          className="bg-white/10 rounded-md py-2 px-2 flex justify-center"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText />
        </a>
      </div>
    </div>
  );
};

export default Accounts;
