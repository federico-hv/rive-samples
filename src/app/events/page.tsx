"use client";

import { linkStyle } from "@/helpers/consts";
import Rive, {
  EventType,
  RiveEventType,
  useRive,
  Event,
} from "@rive-app/react-canvas";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { rive, RiveComponent } = useRive({
    src: "events.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const playSound = (soundName: string) => {
    try {
      console.log("PLAYING");
      const audio = new Audio(`/sounds/${soundName}.wav`);
      // LOOP LOGIC
      // audio.addEventListener(
      //   "ended",
      //   function () {
      //     this.currentTime = 0;
      //     this.play();
      //   },
      //   false
      // );
      audio && audio.play();
    } catch (err) {
      console.log("ERROR PLAYING MUSIC: ", err);
    }
  };

  const onRiveEventReceived = (riveEvent: any) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
      console.log("Event name", eventData.name);
      playSound(eventData.name);
      // Added relevant metadata from the event
      // console.log("Rating", eventProperties.rating);
      // console.log("Message", eventProperties.message);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually
      window.location.href = eventData.url;
    }
  };

  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  return (
    <div className="bg-white h-[100vh]">
      <Link className={linkStyle} href="/">
        Home
      </Link>
      <RiveComponent className="h-[100vh] w-[100vw]" />
    </div>
  );
}

// const { rive, RiveComponent } = useRive({
//   src: "https://cdn.rive.app/animations/vehicles.riv",
//   stateMachines: "bumpy",
//   autoplay: false,
// });

// return (
//   <RiveComponent
//     onMouseEnter={() => rive && rive.play()}
//     onMouseLeave={() => rive && rive.pause()}
//   />
// );
