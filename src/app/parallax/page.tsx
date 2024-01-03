"use client";

import Rive, {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import Link from "next/link";
import useScrollPosition from "@/hoooks/useScroll";
import { useEffect } from "react";
import { linkStyle } from "@/helpers/consts";

export default function Page() {
  const scrollPosition = useScrollPosition();

  console.log("SCROLL: ", scrollPosition);

  const { rive, RiveComponent } = useRive({
    src: "parallax.riv",
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
    }),
    autoplay: true,
  });

  let heightInput = useStateMachineInput(rive, "State Machine 1", "scroll");

  useEffect(() => {
    if (heightInput) {
      heightInput.value = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <div className="bg-white h-[805px]">
      <Link className={`${linkStyle} fixed z-50 bg-blue-300`} href="/">
        Home
      </Link>
      <RiveComponent className="fixed z-0 h-[100vh] w-[100vw]" />
      <div>
        <div className="absolute text-slate-400 mt-[50px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            venenatis elit ipsum, nec tempor leo finibus imperdiet. In aliquam
            diam orci, ut lacinia felis iaculis a. Nunc id ante purus. Morbi
            mattis quam ac risus rhoncus, in sodales augue laoreet. Nunc
            imperdiet porttitor eros et laoreet. Aenean posuere aliquet erat,
            quis fringilla nisi tempor quis. Duis eu tortor eros. Phasellus
            blandit lacus non mi finibus, eu pharetra felis fringilla. Nunc non
            ipsum molestie nisi interdum hendrerit. Cras enim enim, rhoncus non
            magna eget, pretium vestibulum purus. Aenean odio nisi, suscipit et
            egestas hendrerit, dictum sed metus. Etiam eros elit, ultrices sit
            amet massa ac, consectetur efficitur nisi. Pellentesque auctor
            finibus lectus nec ultrices. Duis ornare a lectus non scelerisque.
            Etiam finibus mattis eros ac vehicula. Pellentesque vel ullamcorper
            libero. Quisque volutpat ac magna at eleifend. Donec cursus, diam
            eget scelerisque aliquam, tellus ligula finibus sapien, quis tempor
            sapien tortor sed nibh. Fusce aliquam, neque vitae elementum cursus,
            purus diam ultrices neque, sit amet bibendum metus augue non felis.
            Cras maximus sem vel faucibus ultrices. Nunc pulvinar, leo sed
            convallis pharetra, ligula dolor iaculis nisi, ut interdum ligula
            libero vitae quam. Aenean odio erat, fringilla ut auctor non,
            hendrerit vitae sem. Ut id urna varius, condimentum nisl in,
            consequat erat. Ut sed lacinia massa. Duis et fringilla arcu,
            elementum consequat dolor. Vestibulum tempor lacus vel nisi tempor,
            eu volutpat lacus dapibus. Etiam rutrum lorem eu dui tincidunt, vel
            vulputate est porta. Curabitur tristique felis ut mi semper, ut
            varius sem porta. Pellentesque et nisl placerat felis cursus rhoncus
            ac vitae magna. Sed vel pulvinar mauris. Aenean mollis feugiat
            ligula sed dignissim. Nullam pulvinar magna est, eget efficitur urna
            pharetra nec. Sed consequat, nisi ac fringilla gravida, quam nisi
            porta velit, ut faucibus ipsum massa vel neque. Duis a nisi maximus
            nisl posuere tempor a id ipsum. Sed ornare ligula a enim
            sollicitudin vestibulum. Etiam semper orci ac commodo ornare. Cras
            nec sodales sapien. Donec euismod, tellus nec sagittis accumsan,
            urna ligula tristique justo, a vestibulum lorem augue nec nisl.
            Suspendisse ipsum purus, vulputate id dictum eu, malesuada at
            libero. Etiam quis libero venenatis lectus elementum accumsan.
            Curabitur convallis purus sed ante luctus tempus. Vestibulum
            imperdiet ac lorem aliquam suscipit. Aliquam hendrerit porttitor
            laoreet. Vivamus lobortis dolor in erat vestibulum, pretium dapibus
            nulla ultricies. In eu sapien sed sem euismod auctor. Phasellus
            varius sem in magna placerat pulvinar. Sed egestas mi eu arcu
            consectetur, et cursus purus accumsan. Morbi elementum justo et
            cursus hendrerit. Phasellus nisi ligula, ultrices ac neque id,
            placerat dapibus dui. Vivamus dignissim id neque in convallis.
            Maecenas lobortis id odio eget pellentesque. Nam porta vestibulum
            lorem quis consectetur. Curabitur pulvinar ex sapien, quis tempor
            tellus ultrices vel. Integer ipsum leo, ultricies eu risus a,
            bibendum auctor dolor. Nullam euismod pulvinar euismod. Nam sagittis
            mauris sit amet sollicitudin mattis. Nam ex est, gravida eget ante
            id, lobortis consectetur ex. Mauris blandit tempus magna vel
            commodo. Sed mattis metus a tellus tempus feugiat. Donec posuere
            euismod sem, sit amet pellentesque mauris fringilla vitae. In nunc
            diam, volutpat sed elit at, rutrum fermentum massa. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Pellentesque ornare, purus sit amet ullamcorper
            faucibus, nisl sapien feugiat nisl, id volutpat eros diam et nulla.
            Vivamus porta luctus tellus sed fringilla.
          </p>
        </div>
      </div>
    </div>
  );
}

// export default function () {
//   const scrollPosition = useScrollPosition();

//   console.log("SCROLL: ", scrollPosition);

//   const { rive, RiveComponent } = useRive({
//     src: "lemonade.riv",
//     stateMachines: "ScrollingBehavior",
//     artboard: "lemonade_Square",
//     autoplay: true,
//   });

//   let heightInput = useStateMachineInput(
//     rive,
//     "ScrollingBehavior",
//     "scrollPct"
//   );

//   useEffect(() => {
//     if (heightInput) {
//       heightInput.value = scrollPosition;
//     }
//   }, [scrollPosition]);

//   return (
//     <div className="bg-white h-[805px]">
//       <Link className={linkStyle} href="/">
//         Home
//       </Link>
//       <RiveComponent className="h-[100vh] w-[100vw]" />
//     </div>
//   );
// }
