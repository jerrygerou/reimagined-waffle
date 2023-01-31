import './App.scss';

import { About, Footer, Header, Skills, Art, Work } from './containers';
import { Navbar, Blog, BlogNavbar } from './components';
import './App.scss';
import $ from 'jquery';

function App() {
    const on_blog = (window.location.href.indexOf("blog") > -1)

    $(document).ready(function() {
        $('.link-blog').click(function(event){
            event.preventDefault();
            window.location.replace("/#blog");
            window.location.reload(true);
        });
    });

    $(document).ready(function() {
        $('.blog-nav').click(function(event){
            console.log(event);
            event.preventDefault();
            window.location.replace("/#home");
            window.location.reload(true);
        });
    });

  return (
      <div className="app">
          {(on_blog) ? (
              <div>
                  <BlogNavbar />
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
