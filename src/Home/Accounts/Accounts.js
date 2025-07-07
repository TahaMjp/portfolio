const Accounts = () => {
  return (
    <div className="p-4">
      <p className="text-2xl">Accounts And Social</p>
      <ul className="text-lg my-1 w-10/12 text-pretty mx-auto flex flex-col gap-y-2">
        <li className="list-disc">
          Instagram :{" "}
          <a
            href="https://www.instagram.com/tahamjp?igsh=MXZ2Z3hpNGFpdTdjcA=="
            className="text-blue-700 underline underline-offset-2 "
          >
            tahamjp
          </a>
        </li>
        <li className="list-disc">
          Github :{" "}
          <a
            href="https://github.com/TahaMjp"
            className="text-blue-700 underline underline-offset-2 "
          >
            TahaMjp
          </a>
        </li>
        <li className="list-disc">
          Hashnode Blog :{" "}
          <a
            href="https://hashnode.com/@tahamjp"
            className="text-blue-700 underline underline-offset-2 "
          >
            tahamjp
          </a>
        </li>
        <li className="list-disc">
          Email :{" "}
          <a
            href="mailto:tahamajlesipour@gmail.com"
            className="text-blue-700 underline underline-offset-2 "
          >
            tahamajlesipour@gmail.com
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Accounts;
