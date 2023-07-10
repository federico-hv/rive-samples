import Image from "next/image";
import Link from "next/link";

export const linkStyle = `active:bg-red-800 hover:bg-sky-700 hover:text-white p-[10px]`;

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh]">
      <Link className={linkStyle} href="/blendstate">
        blendstate
      </Link>
      <Link className={linkStyle} href="/blendstatescroll">
        blendstatescroll
      </Link>
      <Link className={linkStyle} href="/beaversample">
        beaversample
      </Link>
      <Link className={linkStyle} href="/squarecolorchange">
        squarecolorchange
      </Link>
      <Link className={linkStyle} href="/starball">
        starball
      </Link>
    </main>
  );
}
