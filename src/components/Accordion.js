import React, {useState, useRef} from 'react'
import "./Accordion.css";
import Arrow from './Arrow'

const Accordion = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon")

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === " " ? "active" : " ");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate")
        console.log(content.current.scrollHeight);
    }

    return(
        <div className="accordion__container">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__name">{props.name}</p>
                <Arrow className={`${setRotate}`} width={10} fill={"#191414"}/>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                <div 
                    className="accordion__text"
                    dangerouslySetInnerHTML = {{ __html: props.content}}
                >
                </div>
            </div>
        </div>
    )
}

export default Accordion;