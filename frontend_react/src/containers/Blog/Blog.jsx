
import groq from 'groq'
import { motion } from 'framer-motion';
import { client } from '../../client'
import React, {useEffect, useState} from "react";
import Post from './Post.jsx'
import {AppWrap, MotionWrap} from "../../wrapper";

import '../Skills/Skills.scss';

const Blog = () => {
    const [posts, setPosts] = useState([]);

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
        const query = '*[_type == "post"]'

        client.fetch(query).then((data) => {
            setPosts(data);
        });
    }, []);


    return (
        <>
            <h2 className="head-text">This is My<span> Blog</span></h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-exp-works">
                    {posts.length > 0 && posts.map(
                        ({ _id, title = '', slug = '', publishedAt = '' }) =>
                            slug && (
                                <li key={_id}>
                                    {title}&nbsp;
                                    ({new Date(publishedAt).toDateString()}) &nbsp;
                                    <a href={'/posts/' + _id}>
                                        expand
                                    </a>
                                </li>
                            )
                    )}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Blog, 'app__skills'),
    'blog',
    'app__whitebg',
);