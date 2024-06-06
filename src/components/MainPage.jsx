import React from 'react';
import Photo from './Photo';
import Info from './Info';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function MainPage() {
    return (
      <div className="ctn">
        <Photo />
        <div className='ctn-mid-section'>
          <Info />
          <Buttons />
          <About />
          <Interests />
          <Footer />
        </div>
      </div>
    );
  }

export default MainPage;