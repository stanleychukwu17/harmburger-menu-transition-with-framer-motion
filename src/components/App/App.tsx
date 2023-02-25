import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// https://huemint.com/brand-intersection/#palette=f8ffff-17365b-2c7e8a-d3beaf - color palette


// from react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

// import the images
type imgType = {
    id:number,
    img:string,
}
const images: imgType[] = []
// load the images to be displayed into the array database
for (let index = 1; index < 7; index++) {
    images.push({
        id: index,
        img: require(`../../assets/photo${index}.jfif`),
    })
}

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
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App;