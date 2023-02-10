import './App.scss';

import { About, Footer, Header, Skills, Art, Work, Blog } from './containers';
import { Navbar } from './components';
import './App.scss';

function App() {
    return (
        <div className="app">
            <div>
                <Navbar />
                <Header />
                <Blog />
                <About />
                <Work />
                <Skills />
                <Art />

                <Footer />
            </div>
        </div>
    );
}

export default App;
