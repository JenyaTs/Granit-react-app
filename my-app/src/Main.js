import React, { Component } from 'react';
import background from './img/background.jpg'
import styled from "styled-components";

const Wrapper = styled.section`
	position: relative;
	top: -30px;
	width: auto;
	height: 390px;
	padding-left: 19%;
	padding-top: 160px;
  	background: url(${background}) 50% 62%;
  	opacity: 0.8;
  	z-index: -1;
  	color: #fff;
`;

const H1 = styled.header`
	margin-bottom: 35px;
	color: #fff;
  	text-transform: uppercase;
  	font-family: 'Gotham Pro Bold';
  	font-size: 36px;
`;

const P = styled.p`
	width: 250px;
	padding: 0;
	margin: 0 0 65px;
	font-size: 14px;
	color: #fff;
	line-height: 1.5em;
	font-family: 'Gotham Pro Regular'
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  margin-right: 30px;
  background: #ffcc00;
  border: none;
  color: #000;
  outline: none;
  cursor: pointer;
  font-family: 'Gotham Pro Bold';
  font-size: 14px;
`;

const A = styled.a`
	margin-left: 15px;
  	color: #fff;
  	cursor: pointer;
`;


class Main extends React.Component {

	render() {
		return(
				<div>
					<Wrapper>
						<H1>
							Быстрая доставка
						</H1>
						<P>
							Бетона, щебня, песка <br></br> и других нерудных материалов <br></br> по Москве и Московской области
						</P>
						<Button>
							Подробнее о доставке
						</Button>
						<span>
							или <A href="#">перейти в каталог</A>
						</span>
					</Wrapper>
				</div>
			)
	}
}

export default Main;