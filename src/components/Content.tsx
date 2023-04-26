import React, {FC} from 'react'
import Button from './Button'

import DefaultPreview from '../assets/default-preview.gif'
import FunnyPreview from '../assets/funny-preview.png'
import ChromeIcon from '../assets/chrome.png'
import FirefoxIcon from '../assets/firefox.png'
import BraveIcon from '../assets/brave.png'

import './Content.css'

const Content: FC = () => {
  return (
    <div className="content-wrapper-element">
        <h1 className="content-heading">Content Censoring Web Extension</h1>
        <ul>
            <li>Censors <span className="bold">English swear words</span> on your webpage</li>
            <li>Choose a custom placeholder <span className="hint">(use <span className="bold">emojis</span> to make it more fun)</span></li>
            <li>Choose to replace swear words by <span className="bold">funny words</span> instead!</li>
            <li>Available on the popular browsers Chrome, Firefox and Brave</li>
        </ul>
        <p className="tagline bold">Drop a review and star the <a className="repo" href="https://github.com/ninadsutrave/censorify" target="_blank" rel="noreferrer noopener">Github Repo</a>! ⭐</p>
        <div className="buttons-wrapper">
          <Button browserName="CHROME" icon={ChromeIcon} extensionUrl="https://ninadsutrave.in"/>
          <Button browserName="FIREFOX" icon={FirefoxIcon} extensionUrl="https://ninadsutrave.in"/>
          <Button browserName="BRAVE" icon={BraveIcon} extensionUrl="https://ninadsutrave.in"/>
        </div>
        <img className="preview" src={DefaultPreview} />
        <img className="preview" src={FunnyPreview} />
    </div>
  )
}

export default Content