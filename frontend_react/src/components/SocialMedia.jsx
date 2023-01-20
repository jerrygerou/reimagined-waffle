import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
    <div className="app__social">
        <a target='_blank' rel="noreferrer" href='https://github.com/jerrygerou'>
            <div>
                <BsGithub />
            </div>
        </a>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/jerrygerou/'>
            <div>
                <BsLinkedin />
            </div>
        </a>
    </div>
);

export default SocialMedia;
