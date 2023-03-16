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

    if (imgItem) {
        const cssObj = window.getComputedStyle(imgItem, null);
        let halfHeight = Number(cssObj.getPropertyValue("height").replace(/[^0-9.]/gi, '')) / 3;
        let halfWidth = Number(cssObj.getPropertyValue("width").replace(/[^0-9.]/gi, '')) / 3;

        top = top - halfHeight
        left = left - halfWidth
    }


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