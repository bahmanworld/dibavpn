import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const Bahman = () => {
  return (
    <main className={`flex flex-col gap-10 p-12`}>
      <div>bahman</div>
      <Link href={"/"} className="flex flex-row items-center">
        <span className="ml-1">
          <FiArrowLeft />
        </span>
        <div>Home Page</div>
      </Link>
    </main>
  );
};

export default Bahman;
