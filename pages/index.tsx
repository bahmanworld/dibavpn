import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        Home Page
      </div>
      <Link href={"/bahman"} className="flex flex-row items-center">
        <div>
          Bahman Page
        </div>
        <span className="ml-1">
          <FiArrowRight />
        </span>
      </Link>
    </main>
  );
}
