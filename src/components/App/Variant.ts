import {Variant} from 'framer-motion'

type general = {
    initial?: Variant;
    animate?: Variant;
}


export const HMenuParVariant: general = {
    initial: () => ({
        y: 30, opacity: 0,
    }),
    animate: (i) => ({
        y: 0, opacity: 1,

        transition: {
            duration: .4,
            ease: 'easeOut',
            delay: .3 * i,

            opacity: {
                duration: 1,
                // delay: 1,
            }
        }
    })
}