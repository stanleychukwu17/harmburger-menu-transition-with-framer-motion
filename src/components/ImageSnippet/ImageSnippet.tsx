import './imageSnippet.scss'

type componentProp = {
    show: boolean;
    imgUrl: string;
}

export default function ImageSnippet({show, imgUrl}: componentProp) {


    return (
        <>
            {show && (
                <div className="imgSnpCvr">
                    <img src={imgUrl} alt="product" />
                </div>
            )}
        </>
    )
}