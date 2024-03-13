import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const SocialButton = (props) => {
    const {facebook, git, linkeding} = props
    return (
        <div className='socialButton'>
            <CiFacebook />
            <FaGithub />
            <TiSocialLinkedinCircular />
            
            
        </div>
    );
}

export default SocialButton;
