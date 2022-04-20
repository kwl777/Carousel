import React, { useState, useEffect, useMemo } from "react";

import style from "./slider.module.css";

/**
 * @param {children} children ReactNode
 * @param {width} width 宽度
 * @param {height} height 高度
 * @param {styles} styles 样式
 * @returns 轮播图 单项
 */
export const SliderItem = (props) => {
  const { children,className, width = "100%",  height = "100%", styles = {},} = props;
  return (
    <div
      className={style.carousel_item}
      style={{ width: width, height: height, ...styles }}
    >
      <div className={style.carousel_item_content}>
        {children}
      </div>
     
    </div>
  );
};

/**
 * @param {title} title 标题
 * @param {describe} describe 描述
 * @param {image} image 图片
 * @returns 轮播图 
 */
export const SliderInfo = (props) => {
  const{ title = "", describe = "", image = "" } = props;
  return (
    <div 
      className="carousel_info_container"
    >
      <div className="carousel_info_info">
        <h1>{title}</h1>
        <span>{describe}</span>
      </div>
      <div className="carousel_info_image_container">
        <img src={image} alt="Jay" className="carousel_info_image" />
      </div>
    </div>
  );
};

/**
 * @param {children} children ReactNode
 * @param {autoplaySpeed} autoplaySpeed 间隔时间 默认3000豪秒
 * @returns 轮播图 容器
 */
const Slider = (props) => {
  const  { children, autoPlay,needDots,autoplaySpeed = 3000} = props;
  const [activeIndex, setActiveIndex] = useState(0); 

  const dotsCount = useMemo(()=>{
    return React.Children.count(children);
  },children)

  /**
   * 更新索引
   * @param {newIndex} newIndex 更新索引
   */
  const onUpdateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = dotsCount - 1;
    } else if (newIndex >= dotsCount) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
    replayAnimations();
  };

  /**
   * 重置动画
   */
  const replayAnimations = () => {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  };

  /**
   * 底部加载条点击事件
   * @param {index} index 跳转索引
   */
  const onClickCarouselIndex = (index) => {
    onUpdateIndex(index);
    replayAnimations();
  };



  useEffect(() => {
    if(autoPlay){
      const interval = setInterval(() => {
        onUpdateIndex(activeIndex + 1);
      }, autoplaySpeed);
  
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
    
  });

  return (
    <div className={style.container}>
      <div
        className={style.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {  height: "100vh" });
        })}
      </div>
      <div className={style.loading}>
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={style.indicator_outer}
              onClick={() => onClickCarouselIndex(index)}
            >
              <div
                className={style.indicator_inside}
                style={{
                  animationDuration: index === activeIndex ? `${autoplaySpeed/1000}s` : "0s",
                  backgroundColor: index === activeIndex ? "#FFFFFF" : null,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

