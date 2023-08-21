import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";


const Bahman = () => {
  return (
    <main className={`flex flex-col gap-4 p-12`}>
      <div>bahman</div>
      <Link href={"/"} className="flex flex-row items-center">
        <span className="mr-1">
          <FiArrowLeft />
        </span>
        <div className="">Home Page</div>
      </Link>
    </main>
  );
};

export default Bahman;
