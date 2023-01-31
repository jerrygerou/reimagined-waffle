import './App.scss';

import { About, Footer, Header, Skills, Art, Work } from './containers';
import { Navbar, Blog } from './components';
import './App.scss';
import $ from 'jquery';

function App() {
    const on_blog = window.location.href.indexOf("blog")

    $(document).ready(function() {
        $('.link-blog').click(function(event){
            event.preventDefault();
            window.location.replace("/blog");
        });
    });

  return (
      <div className="app">
          {(on_blog > -1) ? (
              <div>
                  <Navbar />
                  <Blog />
              </div>

          ) : (
              <div>
                  <Navbar />
                  <Header />
                  <About />
                  <Work />
                  <Skills />
                  <Art />
                  <Footer />
              </div>
          )}
      </div>
  );
}

export default App;
