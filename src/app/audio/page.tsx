"use client";

import { linkStyle } from "@/helpers/consts";
import Rive, { useRive } from "@rive-app/react-canvas";
import Link from "next/link";

export default function Page() {
  const { rive, RiveComponent } = useRive({
    src: "audio.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <div className="bg-white h-[100vh]">
      <Link className={linkStyle} href="/">
        Home
      </Link>
      <RiveComponent className="h-[100vh] w-[100vw]" />
    </div>
  );
}
