import React from 'react';

function WorkExperience() {
  return (
    <div className="ctn">
      <Photo />
      <div className='ctn-mid-section'>
        <Info />
        <Buttons />
        <About />
        <div className="content">
          <h1>Опыт работы</h1>
          {/* мой опыт работы */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default WorkExperience;