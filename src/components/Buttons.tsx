import React, { useState, FC } from 'react'
import newTabIcon from '../assets/new-tab-icon.png'
import './Buttons.css'

interface props {
    autoRotate: boolean,
    setAutoRotate: Function
}

const Buttons: FC<props> = ({autoRotate, setAutoRotate}: props) => {

    const [buttonStyles, setButtonStyles] = useState({})
    const [margin, setMargin] = useState({marginTop: '4rem'})

    const toggleAutoRotate = () => {
        if(autoRotate) {
            setButtonStyles({})
            setMargin({marginTop: '0'})
        } else {
            setButtonStyles({backgroundColor: '#CB786Cdd', border: '2px solid #62332ba6'})
            setMargin({marginTop: '4rem'})
        }
        setAutoRotate(!autoRotate)
    }

  return (
    <div className="buttons-wrapper" style={margin}>
        <button onClick={toggleAutoRotate} style={buttonStyles} id="auto-rotate-btn">
            AUTO ROTATE : {autoRotate?'ON':'OFF'}
        </button>
        <a href="https://npmjs.com/package/react-fancy-circular-carousel" target="_blank" rel="noopener noreferrer">
            <button>
                GO TO DOCS <img src={newTabIcon}></img>
            </button>
        </a>
        <a href="https://github.com/ninadsutrave/react-fancy-circular-carousel" target="_blank" rel="noopener noreferrer">
            <button>
                GITHUB REPO <img src={newTabIcon}></img>
            </button>
        </a>
    </div>
  )
}

export default Buttons