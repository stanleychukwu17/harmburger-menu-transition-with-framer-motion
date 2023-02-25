import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// https://huemint.com/brand-intersection/#palette=f8ffff-17365b-2c7e8a-d3beaf - color palette


// from react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

// import the images
const listOfTitles = [
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
console.log(images)

const App = () => {
    return (
        <div className="AppMain">
            <div className="header">
                <div className="HLink">Products</div>
                <div className="HMenu">
                    <div className=""><AiOutlineMenu/></div>
                    <div className=""><AiOutlineClose/></div>
                </div>
            </div>
            <div className="">
                <div className="HomePageDts">
                    <div className="">Click on the menu button</div>
                </div>
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
        </div>
    )
}
export default App;