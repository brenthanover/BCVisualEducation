import React from 'react';
import '../style/About.css'
import InstagramEmbed from 'react-instagram-embed';

const About = () => {
    return (
        <div>
            <h2>Professional Links</h2>
            <div className="frame">
                <a href="https://www.linkedin.com/in/brenthanover/">LinkedIn</a>
                <a href="https://github.com/brenthanover/">GitHub</a>
                <a href="https://leetcode.com/brenthanover/">LeetCode</a>
            </div>


            <h2>Photography</h2>

            <img src="https://i.imgur.com/HqJS7oo.jpg" alt=""/>
            <img src="https://i.imgur.com/u3mpR5T.jpg" alt=""/>
            <img src="https://i.imgur.com/ZUi7h1i.jpg" alt=""/>
            <img src="https://i.imgur.com/NPtxrdV.jpg" alt=""/>
            <img src="https://i.imgur.com/AvTbZbf.jpg" alt=""/>
            <img src="https://i.imgur.com/xEr6gXs.jpg" alt=""/>

            <h2>Instagram</h2>
            <div className="instatable">
                <div className="instapost">
                    <InstagramEmbed
                        url='https://instagr.am/p/Bo0h5kSBbsc/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </div>
                <div className="instapost">
                    <InstagramEmbed
                        url='https://instagr.am/p/BumsbxjgwxC/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </div>
                <div className="instapost">
                    <InstagramEmbed
                        url='https://instagr.am/p/Br_nQYAHHYT/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                    />
                </div>
            </div>
        </div>
    )
};

export default About;