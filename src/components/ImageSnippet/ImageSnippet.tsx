import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { imageCoverVariant } from '../App/Variant';
import './imageSnippet.scss'

type componentProp = {
    show: boolean;
    imgUrl: string;
    top: number;
    left: number;
    x: number; 
    y: number;
    target: HTMLDivElement;
}

export default function ImageSnippet({show, imgUrl, top, left, x, y, target}: componentProp) {
    const imgItem = document.querySelector('.imgSnpCvr img') as HTMLImageElement
    const xInput = useMotionValue(0)
    const yInput = useMotionValue(0)
    let titleHeight = 0;
    let titleWidth = 0;
    let halfHeight = 0;
    let halfWidth = 0;

    useEffect(() => {
        xInput.set(x)
        yInput.set(y)
    }, [x,y,xInput,yInput])

    if (target) {
        const targetCssObj = window.getComputedStyle(target, null)
        titleHeight = Number(targetCssObj.getPropertyValue("height").replace(/[^0-9.]/gi, ''))
        titleWidth = Number(targetCssObj.getPropertyValue("width").replace(/[^0-9.]/gi, ''))
        halfHeight = Math.round(titleHeight/5)
        halfWidth = Math.round(titleWidth/5)
    }

    const moveX = useTransform(xInput, [0, titleWidth], [-(halfWidth), (halfWidth)])
    const moveY = useTransform(yInput, [0, titleHeight], [-(halfHeight), (halfHeight)])

    if (imgItem) {
        const cssObj = window.getComputedStyle(imgItem, null);
        let halfHeight = Number(cssObj.getPropertyValue("height").replace(/[^0-9.]/gi, '')) / 3;
        let halfWidth = Number(cssObj.getPropertyValue("width").replace(/[^0-9.]/gi, '')) / 3;

        top = top - halfHeight
        left = left - halfWidth
    }

    return (
        <>
            {show && (
                <motion.div className="imgSnpCvr" variants={imageCoverVariant} initial='initial' animate='animate' style={{top, left, x:moveX, y:moveY}}>
                    <img src={imgUrl} alt="product" />
                </motion.div>
            )}
        </>
    )
}