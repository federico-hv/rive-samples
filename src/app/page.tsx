import { linkStyle } from "@/helpers/consts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh]">
      <Link className={linkStyle} href="/blendstate">
        blendstate
      </Link>
      <Link className={linkStyle} href="/blendstatescroll">
        blendstatescroll
      </Link>
      <Link className={linkStyle} href="/followpathconstraint">
        followpathconstraint
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
