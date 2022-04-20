import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Slider from './index';

// 轮播图数据
const info = [
  {
    id: 1,
    title: "suho",
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

afterEach(cleanup);

test('renders slick without infos', () => {
  const { getByText,container } = render(<Slider />);
  expect(container.firstChild).toBeNull();
});

test('renders slick with three infos', () => {
  const {  getByText} = render(<Slider info={info}/>);
  const title = getByText('鹿晗');
  expect(title.textContent).toEqual("鹿晗");
  expect(getByText('鹿晗').textContent).toEqual("鹿晗");
  expect(getByText('big bang').textContent).toEqual("big bang");
  expect(getByText('suho').textContent).toEqual("suho");

});

