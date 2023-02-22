import './app.scss';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';


// from react-icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

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
            </div>
        </div>
    )
}
export default App;