import React from 'react';

import Slider, { SliderItem, SliderInfo } from "./Slider";

import './index.css';

export default function App(props){
  const { info,...others } = props
  if(!info || !info.length){
    return null;
  }

  const settings = {
    autoSpeed: 3000,
    autoPlay: true,
    needDots: true,
    ...others
  };
  return (
    <Slider {...settings}>
      {info.map((item) => {
        return (
          <SliderItem
            key={item.id}
            styles={{ backgroundColor: item.backgroundColor }}
          >
            <SliderInfo
              title={item.title}
              describe={item.describe}
              image={item.image}
            />
          </SliderItem>
        );
      })}
    </Slider>
  );
};
