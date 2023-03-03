import {Variant} from 'framer-motion'

type general = {
    initial?: Variant;
    animate?: Variant;
}


export const HMenuParVariant: general = {
    initial: {
        y: 30, opacity: 0,
    },
    animate: {
        y: 0, opacity: 1,

        transition: {
            duration: .5,
            ease: 'easeOut',

            opacity: {
                duration: 1,
                // delay: 1,
            }
        }
    }
}