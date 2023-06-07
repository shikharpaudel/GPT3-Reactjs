import React from 'react'
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import './Brand.css';
const Brand = () => {
  return (
   <div className='gpt3__brand section__padding' id = "brand">
    <div>
      <img src = {google} alt = "google"/>
    </div>
    <div>
      <img src = {slack} alt = "slack"/>
    </div>
    <div>
      <img src = {atlassian} alt = "atlassian"/>
    </div>
    <div>
      <img src = {dropbox} alt = "dropbox"/>
    </div>
    <div>
      <img src = {shopify} alt = "google"/>
    </div>
   </div>
  )
}

export default Brand