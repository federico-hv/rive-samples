"use client";

import { linkStyle } from "@/helpers/consts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col h-[100vh]">
      <Link className={linkStyle} href="/audio">
        audio
      </Link>
      <Link className={linkStyle} href="/blendstate">
        blendstate
      </Link>
      <Link className={linkStyle} href="/blendstatescroll">
        blendstatescroll
      </Link>
      {/* <Link className={linkStyle} href="/dynamictext">
        dynamictext
      </Link> */}
      <Link className={linkStyle} href="/parallax">
        parallax
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
      <Link className={linkStyle} href="/events">
        events
      </Link>
      <Link className={linkStyle} href="/joysticks">
        joysticks
      </Link>
      <Link className={linkStyle} href="/controlledjoysticks">
        controlledjoysticks
      </Link>
      <Link className={linkStyle} href="/outofbandassets">
        outofbandassets
      </Link>
      <Link className={linkStyle} href="/rotationconstraint">
        rotationconstraint
      </Link>
      <Link className={linkStyle} href="/slider">
        slider
      </Link>
      <Link className={linkStyle} href="/slidercopy">
        slidercopy
      </Link>
      <Link className={linkStyle} href="/animationevents">
        animationevents
      </Link>
    </main>
  );
}
