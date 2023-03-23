import {useEffect, useRef, useState} from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { gsap } from 'gsap';

import CustomCursor from '../CustomCursor/CustomCursor'; // imports the custom cursor, the green circle that follows the mouse pointer all around the page
import ImageSnippet from '../ImageSnippet/ImageSnippet'; // shows a sneak peak of a product when a product link is hovered on

import './app.scss';

// from react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { HMenuParVariant, imageAnimation, line1Animation, line2Animation, titleAnimation } from './Variant'; // framer-motion variants


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
    id: number,
    title: string,
    img: string,
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
    const [phase, setPhase] = useState<'side1'|'side2'|'side3'>('side1') // for switching btw different phases
    const [productToView, setProductToView] = useState<number>(0) // stores the product id - i.e the product to be viewed
    const menuControl = useAnimationControls()
    const phase2Control = useAnimationControls()
    const tControl = useRef<0|1>(0) // helps us with which part of the block slider animations to run, should the blocks go up or down
    const targetElement = document.querySelector('div.AppMain') as HTMLDivElement
    const [imageSnip, setImageSnip] = useState({show:false, imgUrl:images[0].img, top:0, left:0, x:0, y:0, target:targetElement})

    //--start-- handles the block animations btw phases
    const runBlockAnimation1 = () => {
        gsap.set('.absoluteCover', {display: 'block'})
        gsap.set('.absoluteChild', {scaleY: 0})

        tControl.current === 0 ? runPart0Animation() : runPart1Animation()
        tControl.current = (tControl.current === 0) ? 1 : 0
    }

    const runPart0Animation = () => {
        gsap.to('.a1', {scaleY: 1, duration: 1, transformOrigin: 'top'})
        gsap.to('.a2', {scaleY: 1, duration: 1, transformOrigin: 'bottom'})
        gsap.to('.a1', {scaleY: 0, duration: 1, delay: 1.2, transformOrigin: 'bottom'})
        gsap.to('.a2', {
            scaleY: 0, duration: 1, delay: 1.2, transformOrigin: 'top',
            onComplete: () => {
                gsap.set('.absoluteCover', {display: 'none'})
            }
        })
    }

    const runPart1Animation = () => {
        gsap.to('.a1', {scaleY: 1, duration: 1, transformOrigin: 'bottom'})
        gsap.to('.a2', {scaleY: 1, duration: 1, transformOrigin: 'top'})
        gsap.to('.a1', {scaleY: 0, duration: 1, delay: 1.2, transformOrigin: 'top'})
        gsap.to('.a2', {
            scaleY: 0, duration: 1, delay: 1.2, transformOrigin: 'bottom',
            onComplete: () => {
                gsap.set('.absoluteCover', {display: 'none'})
            }
        })
    }
    //--end--

    // animates the hamburger menu from = to X, and also handles the displaying of the page for the current phase selected
    useEffect(() => {
        if (phase === 'side1') {
            menuControl.start({y:0})

            gsap.set('.productList, .productView', {display: 'none', delay:1}) // hides other pages except the home page
            gsap.set('.HomePageDts', {display: 'flex', delay:1.2})
        } else if (phase === 'side2') {
            menuControl.start({y:-43})

            gsap.set('.HomePageDts, .productView', {display: 'none', delay:1}) // hides other pages except the product list page
            gsap.set('.productList', {display: 'flex', delay:1.2})

            phase2Control.set('initial')
            phase2Control.start('animate') // animates all of the items and elements in the productListing page
        } else if (phase === 'side3') {
            gsap.set('.HomePageDts, .productList', {display: 'none', delay:1}) // hides other pages except the product viewing page
            gsap.set('.productView', {display: 'flex', delay:1.2})
        }
        
    }, [phase, menuControl, phase2Control])

    // gets the phase 3 ready for viewing , the phase 3 is the product viewing page
    const updateToPhase3 = (productNum:number) => {
        setProductToView(productNum); // updates the productId to view
        runBlockAnimation1()
        setPhase('side3');
    }

    // shows the sneak peak of an item image, when the item link is hovered on the productList page @phase2
    const showImageForThisBox = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement // we are hopeful that the viewier is hovering over the link 
        const parent = target.parentElement! // go to the parent element
        const imgItem = parent.querySelector('div.BxImg') as HTMLDivElement // searches for the image inside the parent

        //@ts-ignore
        if (event.target.classList.contains('BxTitle')) { // this means the hovered item is the itemLink which is what we want
            const imgBoundaries = imgItem.getBoundingClientRect()
            const imgUrl = imgItem.querySelector('img')!.getAttribute('src')!
            const {offsetX:x, offsetY:y} = event.nativeEvent // the distance of the image from the left and top side of the viewport

            setImageSnip({...imageSnip, show: true, imgUrl, top:imgBoundaries.top, left:imgBoundaries.left, x, y, target})
        } else {
            hideImageForThisBox()
        }
    }

    // stops showing the sneak peak of the item image
    const hideImageForThisBox = () => {
        setImageSnip({...imageSnip, show: false})
    }

    // to be deleted, it just quickly shows phase 2 for me
    // useEffect(() => { setTimeout(() => { setPhase('side2') }, 500) }, [])

    return (
        <>
            <div className="AppMain">
                <div className="header">
                    <motion.div
                        variants={HMenuParVariant} custom={0} initial='initial' animate='animate' className="HLink"
                        onClick={
                            () => {
                                setPhase('side2')
                                runBlockAnimation1()
                            }
                        }
                    >
                        Products
                    </motion.div>
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
                        <div className="BoxGen B1" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={2.5} onClick={() => { updateToPhase3(0); }}>{images[0].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={3.5}></motion.div>
                            <motion.div className="BxImg">
                                <img src={images[0].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={3.5}></motion.div>
                            </motion.div>
                        </div>
                        <div className="BoxGen B2" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxLine1" variants={line1Animation} animate={phase2Control} custom={3.5}></motion.div>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={3} onClick={() => { updateToPhase3(1); }}>{images[1].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={4}></motion.div>
                            <div className="BxImg">
                                <img src={images[1].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={4}></motion.div>
                            </div>
                        </div>
                        <div className="BoxGen B3" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxLine1" variants={line1Animation} animate={phase2Control} custom={5}></motion.div>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={4} onClick={() => { updateToPhase3(2); }}>{images[2].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={5}></motion.div>
                            <div className="BxImg">
                                <img src={images[2].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={5}></motion.div>
                            </div>
                        </div>
                        <div className="BoxGen B4" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxLine1" variants={line1Animation} animate={phase2Control} custom={6}></motion.div>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={5} onClick={() => { updateToPhase3(3); }}>{images[3].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={6}></motion.div>
                            <div className="BxImg">
                                <img src={images[3].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={6}></motion.div>
                            </div>
                        </div>
                        <div className="BoxGen B5" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxLine1" variants={line1Animation} animate={phase2Control} custom={7}></motion.div>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={6} onClick={() => { updateToPhase3(4); }}>{images[4].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={7}></motion.div>
                            <div className="BxImg">
                                <img src={images[4].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={7}></motion.div>
                            </div>
                        </div>
                        <div className="BoxGen B6" onMouseMove={(event) => { showImageForThisBox(event) }} onMouseOut={hideImageForThisBox}>
                            <motion.div className="BxTitle" variants={titleAnimation} animate={phase2Control} custom={7} onClick={() => { updateToPhase3(5); }}>{images[5].title}</motion.div>
                            <motion.div className="BxLine2" variants={line2Animation} animate={phase2Control} custom={8}></motion.div>
                            <div className="BxImg">
                                <img src={images[5].img} alt="" />
                                <motion.div className="imgCvr" variants={imageAnimation} animate={phase2Control} custom={8}></motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productView">
                    <div className="ProductMCvr">
                        <div className="ProductImg">
                            <img src={images[productToView].img} alt="" />
                        </div>
                        <div className="ProductTitle">
                            <div className="Ti2">{images[productToView].title}</div>
                        </div>
                    </div>
                </div>
                <div className="absoluteCover">
                    <div className="absoluteChild a1"></div>
                    <div className="absoluteChild a2"></div>
                </div>
            </div>
            <CustomCursor />
            <ImageSnippet {...imageSnip} />
        </>
    )
}
export default App;