import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import './customCursor.scss'

export default function CustomCursor() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // using framerMotion to move the custom mouse with re-rending the page.. framerMotion, you're awesome!
    const updateMousePosition = useCallback((event: MouseEvent) => {
        x.set(event.clientX);
        y.set(event.clientY);
    }, [x,y])


    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [updateMousePosition])
    
    return (
        <motion.div className="customCursor" style={{x, y}}></motion.div>
    )
}