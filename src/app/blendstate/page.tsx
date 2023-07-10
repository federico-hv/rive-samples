"use client";

import Rive, { useRive } from "@rive-app/react-canvas";
import Link from "next/link";
import { linkStyle } from "../page";

export default function () {
  const { rive, RiveComponent } = useRive({
    src: "blendstate.riv",
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
