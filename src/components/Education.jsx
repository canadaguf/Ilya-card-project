import React from 'react';

function Education() {
  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Buttons />
        <About />
        <div className="content">
          <h1>Образование</h1>
          {/* мое образование */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Education;