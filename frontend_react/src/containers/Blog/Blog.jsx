
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

    const postShows = {};
    for (var i = 0; i < posts.length; i++) {
        console.log(postShows[i]);
        //Do something
    }

    function showHidePost(_id, show) {
        console.log(postShows)
        // console.log(postShows[_id])
        postShows[_id] = !show;
        // console.log(postShows[_id])
    }

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
                                    <button onClick={showHidePost(_id, false)} key={_id}>I am a button</button>
                                    {/*<a onClick={showHidePost(_id)}>hello</a>*/}
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