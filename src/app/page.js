'use client';
import { useEffect } from "react";
import styles from "./page.module.scss";
import Intro from './components/Intro/index'
import Description from './components/Description/Index'


export default function Home() {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector("body"),
          smooth: true,
          mobile: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        });
      }
    )()
  }, [])




  return (
    <main className={styles.main}>
      <Intro></Intro>
      <Description></Description>
    </main>
  );
}
