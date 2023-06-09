import {FC} from 'react'
import './Button.css'

interface props {
    browserName: string,
    extensionUrl: string,
    icon: string
}

const Buttons: FC<props> = ({browserName, icon, extensionUrl}: props) => {

  return (
    <a className="anchor-wrapper" href={extensionUrl} target="_blank" rel="noreferrer noopener">
      <button className="extension-button">
              <img src={icon} />
              ADD TO {browserName}
      </button>
    </a>
  )
}

export default Buttons