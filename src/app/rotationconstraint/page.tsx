"use client";

import { linkStyle } from "@/helpers/consts";
import Rive, {
  EventType,
  RiveEventType,
  useRive,
  Event,
  decodeImage,
} from "@rive-app/react-canvas";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { rive, RiveComponent } = useRive({
    src: "rotationconstraint.riv",
    // stateMachines: "State Machine 1",
    animations: "Timeline 1",
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
