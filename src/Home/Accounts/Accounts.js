const Accounts = () => {
  return (
    <div className="p-4">
      <p className="text-2xl">Accounts And Social</p>
      <ul className="text-lg my-1 w-10/12 text-pretty mx-auto flex flex-col gap-y-3 border-s-2 border-black ps-2">
        <li className="flex gap-x-1 items-center">
          Instagram :{" "}
          <a
            href="https://www.instagram.com/tahamjp?igsh=MXZ2Z3hpNGFpdTdjcA=="
            className="text-blue-700 underline underline-offset-2 "
            target="_blank"
            rel="noreferrer"
          >
            tahamjp
          </a>
        </li>
        <li className="flex gap-x-1 items-center">
          Telegram :{" "}
          <a
            href="https://t.me/TahaMajlesi"
            className="text-blue-700 underline underline-offset-2 "
            target="_blank"
            rel="noreferrer"
          >
            TahaMajlesi
          </a>
        </li>
        <li className="flex gap-x-1 items-center">
          Github :{" "}
          <a
            href="https://github.com/TahaMjp"
            className="text-blue-700 underline underline-offset-2 "
            target="_blank"
            rel="noreferrer"
          >
            TahaMjp
          </a>
        </li>
        <li className="flex gap-x-1 items-center">
          Hashnode Blog :{" "}
          <a
            href="https://hashnode.com/@tahamjp"
            className="text-blue-700 underline underline-offset-2 "
            target="_blank"
            rel="noreferrer"
          >
            tahamjp
          </a>
        </li>

        <li className="flex gap-x-1 items-center">
          Email :{" "}
          <a
            href="mailto:tahamajlesipour@gmail.com"
            className="text-blue-700 underline underline-offset-2 "
            target="_blank"
            rel="noreferrer"
          >
            tahamajlesipour@gmail.com
          </a>{" "}
        </li>
        <li className="flex gap-x-1 items-center">
          Phone :{" "}
          <a
            href="tel:+9809012424973"
            className="text-blue-700 underline underline-offset-2 tracking-widest"
            target="_blank"
            rel="noreferrer"
          >
            +9809012424973
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Accounts;
