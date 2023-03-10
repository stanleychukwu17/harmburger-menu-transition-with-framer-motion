import { useEffect, useRef, useState } from 'react';
import './app.scss';
import { motion, useAnimationControls } from 'framer-motion';
import { gsap } from 'gsap';
// https://huemint.com/brand-intersection/#palette=f8ffff-17365b-2c7e8a-d3beaf - color palette


// from react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { HMenuParVariant } from './Variant';

// import the images
const listOfTitles: string[] = [
    'Nike Air Max 90',
    'New Balance X-90 Reboot',
    'Air max x-97 off-white',
    'Kanye west yezzy 700 Geode',
    'Nike Ronaldo Rondo Black up',
    'Nike Light super Od-110',
]
type imgType = {
    id:number,
    title: string,
    img:string,
}
const images: imgType[] = []
// load the images to be displayed into the array database
for (let index = 1; index < 7; index++) {
    images.push({
        id: index,
        title: listOfTitles[index - 1],
        img: require(`../../assets/photo${index}.jfif`),
    })
}


// let the show begin
const App = () => {
    const [phase, setPhase] = useState<'side1'|'side2'|'side3'>('side1')
    const menuControl = useAnimationControls()
    const t1 = useRef<gsap.core.Timeline>({} as gsap.core.Timeline)

    const runBlockAnimation1 = () => {
        gsap.set('.absoluteCover', {display: 'block'})
        gsap.set('.absoluteChild', {scaleY: 0})
        t1.current.play()
    }

    useEffect(() => {
        t1.current = gsap.timeline({defaults:{duration:1}})

        t1.current.to('.a1', { scaleY: 1 })
            .to('.a2', {scaleY: 1, delay:-1})
            .to('.a1', {scaleY: 0, delay: .2,  })
            .to('.a2', {scaleY: 0, delay: -.2})

        t1.current.pause()
        return () => {}
    }, [])
    

    // animates the menu from = to X
    useEffect(() => {
        if (phase === 'side1') {
            menuControl.start({y:0})
        } else if (phase === 'side2') {
            menuControl.start({y:-43})
        } else if (phase === 'side3') {

        }
        
    }, [phase, menuControl])

    return (
        <div className="AppMain">
            <div className="header">
                <motion.div variants={HMenuParVariant} custom={0} initial='initial' animate='animate' className="HLink">Products</motion.div>
                <motion.div
                    variants={HMenuParVariant} custom={1} initial='initial' animate='animate' className="HMenu"
                    onClick={
                        () => {
                            phase === 'side1' ? setPhase('side2') : setPhase('side1')
                            runBlockAnimation1()
                        }
                    }
                >
                    <motion.div animate={menuControl} className="">
                        <motion.div><AiOutlineMenu/></motion.div>
                        <motion.div><AiOutlineClose/></motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div variants={HMenuParVariant} custom={2} initial='initial' animate='animate' className="HomePageDts">
                <div>Click on the menu button</div>
            </motion.div>
            <div className="productList">
                <div className="PrdBoxCvr">
                    <div className="BoxGen B1">
                        <div className="BxTitle">{images[0].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[0].img} alt="" />
                        </div>
                    </div>
                    <div className="BoxGen B2">
                        <div className="BxLine1"></div>
                        <div className="BxTitle">{images[1].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[1].img} alt="" />
                        </div>
                    </div>
                    <div className="BoxGen B3">
                        <div className="BxLine1"></div>
                        <div className="BxTitle">{images[2].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[2].img} alt="" />
                        </div>
                    </div>
                    <div className="BoxGen B4">
                        <div className="BxLine1"></div>
                        <div className="BxTitle">{images[3].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[3].img} alt="" />
                        </div>
                    </div>
                    <div className="BoxGen B5">
                        <div className="BxLine1"></div>
                        <div className="BxTitle">{images[4].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[4].img} alt="" />
                        </div>
                    </div>
                    <div className="BoxGen B6">
                        <div className="BxTitle">{images[5].title}</div>
                        <div className="BxLine2"></div>
                        <div className="BxImg">
                            <img src={images[5].img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="productView">
                <div className="ProductMCvr">
                    <div className="ProductImg">
                        <img src={images[4].img} alt="" />
                    </div>
                    <div className="ProductTitle">
                        <div className="Ti2">{images[0].title}</div>
                    </div>
                </div>
            </div>
            <div className="absoluteCover">
                <div className="absoluteChild a1"></div>
                <div className="absoluteChild a2"></div>
            </div>
        </div>
    )
}
export default App;