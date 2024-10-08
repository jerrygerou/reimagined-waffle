import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const navItems = {
        'home': 'home',
        'about': 'about',
        'tech projects': 'work',
        'experience': 'skills',
        'art': 'art',
        'contact': 'contact'
    };

    return (
        <nav className="app__navbar">
            <a href="/#home">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="logo" />
                </div>
            </a>
            <ul className="app__navbar-links">
                {Object.keys(navItems).map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`/#${navItems[item]}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {Object.keys(navItems).map((item) => (
                                <li key={item}>
                                    <a href={`/#${navItems[item]}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
