import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={``}
    >
      <div className="m-auto p-20">
      <Dashboard />
      </div>
    </main>
  );
}
