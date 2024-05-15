import Image from 'next/image'
import './style.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';




export default function Intro() {

    const bgImage = useRef(null);
    const introImage = useRef(null);
    //GSAP recomienda utilizar useLayoutEffect para poder actuar una vez los componentes están renderizados en la página.
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);


        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: 'top',
                end: 'bottom 90%',
                scrub: true,
                markers: true,
            }
        });

        timeLine
        .fromTo(
          bgImage.current,
          { clipPath: 'inset(18%)' }, // Initial state (hidden)
          { clipPath: 'inset(0%)', duration: 1 }, // Reveal on scroll down
          { scrub: true } // Animate based on scroll position
        )
        .fromTo(
          introImage.current,
          { height: '475px' }, // Initial state (hidden)
          { height: '0', duration: 2, }, // Expand on scroll down
          { scrub: true } // Animate based on scroll position
        );
    }, [])


    return (
        <div className="intro">
            <div ref={bgImage} className="backgroundImage">
                <Image
                    src={'/images/background.jpeg'}
                    fill={true}
                    alt='main'
                />
            </div>

            <div className="intro">
                <div ref={introImage} data-scroll data-scroll-speed="0.2" className="introImage">
                    <Image
                        src={'/images/intro.png'}
                        fill
                        alt='intro'
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.8">Smooth Scroll Exercise</h1>
            </div>
        </div>
    )
}