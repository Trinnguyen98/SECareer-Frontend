import React from 'react';
import {HomeMenu} from '../components/home-menu';
import {Divider, Carousel} from 'antd';

export const Home = ()=>{
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <div>
    <HomeMenu/>
    <Divider orientation="left">News</Divider>
    <div style={{margin: "64px", display: "flex", flexDirection: 'col', justifyContent: "space-between"}}>
    <p>This is some text in a paragraph. This is some text in a paragraph. This is some text in a paragraph. This is some text in a paragraph.</p>
    <div>
    <img src="https://ak.picdn.net/shutterstock/videos/17588299/thumb/1.jpg" style={{width: "600px", height:"auto"}}/>
    </div>
    </div>
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
  )
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
