import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import BlockContent from "@sanity/block-content-to-react";
import './Skills.scss';

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
            ),
        },
    }

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            const sortedData = data.sort((a, b) => a.rank - b.rank);
            setExperiences(sortedData);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills<span> & </span>Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.rank}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">{work.title}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <Tooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                        <BlockContent blocks={work.desc} serializers={serializers} />
                                        </Tooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);
