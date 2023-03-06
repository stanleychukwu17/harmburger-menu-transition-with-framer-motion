import { useState } from 'react';
import './app.scss';
import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
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
    const [phase, setPhase] = useState('side1')

    return (
        <div className="AppMain">
            <div className="header">
                <motion.div variants={HMenuParVariant} custom={0} initial='initial' animate='animate' className="HLink">Products</motion.div>
                <motion.div variants={HMenuParVariant} custom={1} initial='initial' animate='animate' className="HMenu">
                    {phase === 'side1' && (
                        <motion.div ><AiOutlineMenu/></motion.div>
                    )}
                    {phase === 'side2' && (
                        <motion.div ><AiOutlineClose/></motion.div>
                    )}
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
        </div>
    )
}
export default App;