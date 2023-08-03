import * as React from 'react'
import myImage from '../images/1.png';

const AboutPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>看美女嘛？</h1>
      <img src={myImage} alt="1.png" style={{ width: '800px', height: '600px' }} />
    </div>
  );
};
export const Head = () => <title>丹丹</title>

export default AboutPage