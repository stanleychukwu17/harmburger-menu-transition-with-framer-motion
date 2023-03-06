import {Variant} from 'framer-motion'

type general = {
    initial?: Variant;
    animate?: Variant;
}

// for the hamburger menu
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

// for the switching of --- and x
export const menuVariant: general & {exit: Variant} = {
    initial: {
        y: 30
    },
    animate: {
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: -30,
        transition: {
            duration: 1
        }
    }
}