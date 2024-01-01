"use client";

import { linkStyle } from "@/helpers/consts";
import Rive, {
  EventType,
  RiveEventType,
  useRive,
  Event,
  decodeImage,
  ImageAsset,
} from "@rive-app/react-canvas";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { rive, RiveComponent } = useRive({
    src: "imageswap.riv",
    // stateMachines: "State Machine 1",
    animations: "Timeline 1",
    artboard: "Main",
    autoplay: true,
    assetLoader: (asset, bytes) => {
      console.log(
        "Tell our asset importer if we are going to load the asset contents",
        {
          name: asset.name,
          fileExtension: asset.fileExtension,
          cdnUuid: asset.cdnUuid,
          isFont: asset.isFont,
          isImage: asset.isImage,
          bytes,
        }
      );

      // Here, we load a font asset with a random font on load of the Rive file
      // and return true, because this callback handler is responsible for loading
      // the asset, as opposed to the runtime
      if (asset.isImage) {
        randomImageAsset(asset as ImageAsset);
        return true;
      } else {
        return false;
      }
    },
  });

  const randomImageAsset = (asset: ImageAsset) => {
    fetch(`${asset.name}.jpeg`).then(async (res) => {
      console.log("doing this");
      const image = await decodeImage(new Uint8Array(await res.arrayBuffer()));
      asset.setRenderImage(image);
      // You could maintain a reference and update the image dynamically at any time.
      // But be sure to call unref to release any references when no longer needed.
      // This allows the engine to clean it up when it is not used by any more animations.
      image.unref();
    });
  };

  return (
    <div className="bg-white h-[100vh]">
      <Link className={linkStyle} href="/">
        Home
      </Link>
      <RiveComponent className="h-[100vh] w-[100vw]" />
    </div>
  );
}
