"use client";

import Rive, { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Link from "next/link";
import { linkStyle } from "../page";
import useScrollPosition from "@/hoooks/useScroll";
import { useEffect } from "react";

export default function () {
  const scrollPosition = useScrollPosition();

  console.log("SCROLL: ", scrollPosition);

  const { rive, RiveComponent } = useRive({
    src: "blendstate.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  let heightInput = useStateMachineInput(rive, "State Machine 1", "height");

  useEffect(() => {
    if (heightInput) {
      heightInput.value = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="bg-white h-[805px]">
      <Link className={linkStyle} href="/">
        Home
      </Link>
      <RiveComponent className="h-[100vh] w-[100vw]" />
    </div>
  );
}
