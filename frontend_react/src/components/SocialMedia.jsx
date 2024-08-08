import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaBlogger } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

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
        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/j_as_in_art/'>
            <div>
                <FiInstagram />
            </div>
        </a>
        <a target='_blank' rel="noreferrer" href='http://blog.jerrygerou.com/'>
            <div>
                <FaBlogger />
            </div>
        </a>
    </div>
);

export default SocialMedia;
