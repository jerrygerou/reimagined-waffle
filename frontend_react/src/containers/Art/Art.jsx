import { AppWrap, MotionWrap } from '../../wrapper';
import './Art.scss';

const Art = () => {
    return (
        <>
            <h2 className="head-text">I Make art!</h2>
        </>
    );
}

export default AppWrap(
    MotionWrap(Art, 'app__art'),
    'art',
    'app__primarybg',
);