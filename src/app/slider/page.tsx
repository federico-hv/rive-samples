"use client";

import { linkStyle } from "@/helpers/consts";
import Rive, {
  EventType,
  RiveEventType,
  useRive,
  Event,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { rive, RiveComponent } = useRive({
    src: "slider.riv",
    stateMachines: "State Machine 1",
    // animations: "verticalKnob",
    artboard: "main",
    onLoad: () => changeBackgroundColor(0),
    autoplay: true,
  });

  const onRiveEventReceived = (riveEvent: any) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
      console.log("Event name", eventData.name);
      // playSound(eventData.name);
      // Added relevant metadata from the event
      // console.log("Rating", eventProperties.rating);
      // console.log("Message", eventProperties.message);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually
      window.location.href = eventData.url;
    }
  };

  let verticalAmount = useStateMachineInput(
    rive,
    "State Machine 1",
    "verticalAmount"
  );

  useEffect(() => {
    if (rive && verticalAmount != null) {
      // rive.on(EventType.RiveEvent, onRiveEventReceived);

      rive.on(EventType.StateChange, (event: Event) => {
        console.log("CHANGED: ", verticalAmount!.value);
        changeBackgroundColor(verticalAmount!.value as number);
      });
    }
  }, [rive, verticalAmount]);

  function changeBackgroundColor(number: number) {
    // Ensure the number is within the range of 0 to 99
    number = Math.min(99, Math.max(0, number));

    // Calculate the grayscale value based on the number
    var grayscaleValue = Math.round((number / 99) * 255);

    // Convert the grayscale value to a CSS color string
    var colorString =
      "rgb(" +
      grayscaleValue +
      "," +
      grayscaleValue +
      "," +
      grayscaleValue +
      ")";

    // Set the background color of the document body
    document.body.style.backgroundColor = colorString;
    document.getElementById("rive-canvas")!.style.background = colorString;
  }

  return (
    <div className="bg-white h-[100vh]">
      <Link className={linkStyle} href="/">
        Home
      </Link>
      <RiveComponent id="rive-canvas" className="h-[100vh] w-[100vw]" />
    </div>
  );
}
