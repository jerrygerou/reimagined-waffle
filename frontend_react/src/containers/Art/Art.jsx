import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Art.scss';

const Art = () => {
    const [arts, setArts] = useState([]);
    const [filterArt, setFilterArt] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "art"]';

        client.fetch(query).then((data) => {
            setArts(data);
            setFilterArt(data);
        });
    }, []);

    const handleArtFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'all') {
                setFilterArt(arts);
            } else {
                setFilterArt(arts.filter((art) => art.tags.includes(item)));
            }
        }, 500);
    };
    return (
        <>
            <h2 className="head-text">My <span>Art</span> Portfolio</h2>

            <div className="app__art-filter">
                {['painting', 'drawing', 'photography', 'digital', 'all'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleArtFilter(item)}
                        className={`app__art-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__art-portfolio"
            >
                {filterArt.map((art, index) => (
                    <div className="app__art-item app__flex" key={index}>
                        <div
                            className="app__art-img app__flex"
                        >
                            <img src={urlFor(art.imgUrl)} alt={art.name} />
                            <motion.div
                                whileHover={{ opacity: [0] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__art-hover app__flex"
                            >
                            </motion.div>
                        </div>

                        <div className="app__art-content app__flex">
                            <h4 className="bold-text">{art.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{art.description}</p>

                            <div className="app__art-tag app__flex">
                                <p className="p-text">{art.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Art, 'app__art'),
    'art',
    'app__primarybg',
);