import { Link } from "lucide-react";

const ArticleCard = (props) => {
  return (
    <div className="w-10/12 mx-auto bg-white/10 rounded-xl backdrop-blur-md shadow-lg shadow-black/50 p-4 flex mt-10 flex-col space-y-4 tracking-wider">
      <p className="mx-auto text-lg">{props.articles.title}</p>
      <p className="w-11/12 border-l-2 border-white mx-auto px-3">
        {props.articles.description}
      </p>
      <div className="w-full flex justify-between">
        <a
          href={props.articles.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9/12 bg-white text-black rounded-md py-1 text-center text-lg font-semibold"
        >
          Open
        </a>
        <button
          className="bg-white text-black rounded-md px-3"
          onClick={() => {
            navigator.clipboard.writeText(props.articles.url);
          }}
        >
          <Link />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
