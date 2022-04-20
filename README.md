# Carousel
### 组件简介
- 走马灯组件，支持自动轮播，默认速度3s
- 自动渲染轮播数目，可点击下方锚点进行切换

### Example
```javascript
    // 轮播图数据
    import Carousel from 'Carousel';
    const info = [
        {
        id: 1,
        title: "suho ",
        describe: "迷你二辑 正式上线",
        image: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/4276636.jpg?max_age=2592000',
        backgroundColor: "#425066",
        },
        {
        id: 2,
        title: "big bang",
        describe: "still life",
        image: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/4278504.jpg?max_age=2592000',
        backgroundColor: "#1bd1a5",
        },
        {
        id: 3,
        title: "鹿晗",
        describe: "兜风 正式上线",
        image: 'http://y.gtimg.cn/music/common//upload/t_musicmall_focus/4290338.gif?max_age=2592000',
        backgroundColor: "#a78e44",
        }
    ];

    export default function SimpleSlider() {

        const settings = {
            autoSpeed: 3000,
            autoPlay: true,
            needDots: true,
        };

        return <Carousel info={info} {...settings}/>
    }


```


