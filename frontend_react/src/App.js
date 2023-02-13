import './App.scss';

import { About, Footer, Header, Skills, Art, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Art />
            <Footer />
        </div>
    );
}

export default App;
