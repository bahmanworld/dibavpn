import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const Bahman = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
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
