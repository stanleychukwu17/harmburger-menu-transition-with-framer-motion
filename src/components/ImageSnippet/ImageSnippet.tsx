import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useCallback, useState } from 'react';
import './imageSnippet.scss'

type componentProp = {
    show: boolean;
    imgUrl: string;
    top: number;
    left: number;
}

export default function ImageSnippet({show, imgUrl, top, left}: componentProp) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [pos, setPos] = useState({x:0, y:0})
    const imgItem = document.querySelector('.imgSnpCvr img') as HTMLImageElement
    const cssObj = window.getComputedStyle(imgItem, null);
    let bgColor = cssObj.getPropertyValue("height");
    console.log(bgColor)

    const updateMousePosition = useCallback((event: MouseEvent) => {
        x.set(event.clientX);
        y.set(event.clientY);
        setPos({x:event.clientX, y:event.clientY})
    }, [x,y])

    if (show ) {
        console.log(top, left)
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [updateMousePosition])

    return (
        <>
            {show && (
                <motion.div className="imgSnpCvr" style={{top, left}}>
                    <img src={imgUrl} alt="product" />
                </motion.div>
            )}
        </>
    )
}