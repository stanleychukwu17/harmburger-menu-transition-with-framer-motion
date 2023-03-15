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

// for the switching of --- (hamburger) and x
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

//--START-- second phase
const deU = .2
export const titleAnimation: general = {
    initial: {y:100},

    animate: ( custom ) => ({
        y: -2, transition: {duration: 1, delay:deU * custom}
    })
}

export const line1Animation: general = {
    initial : {
        scaleX: 0
    },

    animate: (custom) => ({
        scaleX: 1,
        originX: 'right',
        transition: {duration: 1, delay:deU * custom}
    })
}

export const line2Animation: general = {
    initial : {
        scaleX: 0
    },

    animate: (custom) => ({
        scaleX: 1,
        originX: 'left',
        transition: {duration: 1.15, delay:deU * custom}
    })
}