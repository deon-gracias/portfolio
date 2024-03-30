import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { themeChange } from "theme-change";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { IconDownload, IconExternalLink } from "@tabler/icons-react";
import { cursorStore } from "../store/cursor-store";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import Head from "next/head";

import "@splidejs/react-splide/css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { cursor, setCursor } = cursorStore();
  const router = useRouter();

  useEffect(() => {
    setCursor(null);
  }, [router.query]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    themeChange(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 15);
      cursorY.set(e.clientY - 15);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Deon Gracias</title>
      </Head>
      <AnimatePresence initial={false}>
        <motion.div
          key="cursor"
          className={twMerge(
            "cursor bg-primary",
            !cursor ? "" : "bg-accent text-accent-content"
          )}
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          initial={{
            width: 30,
            height: 30,
          }}
          animate={
            cursor ? (cursor !== "action" ? { scale: 2 } : { scale: 0.5 }) : {}
          }
        >
          {cursor === "download" && <IconDownload size={15} />}
          {cursor === "link" && <IconExternalLink size={15} />}
        </motion.div>
      </AnimatePresence>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
