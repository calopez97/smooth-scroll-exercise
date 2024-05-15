import gsap from "gsap";
import './style.module.scss'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react"

const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

export default function Description(){
    return(
        <div className="description">
            {
                phrases.map( (phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                })
            }   
        </div>
    ) 
}


function AnimatedText({children}){

    const textLine = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(textLine.current, {
            scrollTrigger: {
                trigger: textLine.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            animationDelay:'1s',
            ease: "power3.Out"
        })
    }, [])

    // useLayoutEffect(() => {
    //  gsap.registerPlugin(ScrollTrigger)

    //  const textTimeLine = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: textLine.current,
    //         start:'10% bottom',
    //         end:'bottom+=500px bottom',
    //         scrub:true,
    //     },
    //  })

    //  textTimeLine.fromTo(
    //     textLine.current,
    //      // Initial state (hidden)
    //     { left: '50%', duration: 1 }, // Reveal on scroll down
    //     { scrub: true } // Animate based on scroll position
    //   )
        
    // }, [])

    return(
        <p ref={textLine}>{children}</p>
    )
}