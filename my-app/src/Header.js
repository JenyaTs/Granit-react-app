import React, { Component } from 'react';
import logo from './img/logo.png'
import './Header.css';
import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  width: 160px;
  height: 40px;
  margin-left: 30px;
  margin-top: 3px;
  background: transparent;
  color: #292929;
  border: 2px solid #292929;
  outline: none;
  cursor: pointer;
  font-family: 'Gotham Pro Bold';
  font-size: 12px;
`;

const Wrapper = styled.section`
	display: flex;
`;

const Span = styled.span`
	padding-top: 32px;
`;

const H2 = styled.header`
	padding: 0;
	margin: 0;
	margin-top: 5px;
	margin-bottom: 4px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	font-weight: bold;
	font-size: 20px;
`;

const H3 = styled.header`
	padding: 0;
	margin: 0;
	margin-top: 5px;
	margin-bottom: 4px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 18px;
	text-align: right;
`;

const P = styled.p`
	padding: 0;
	margin: 0;
	font-size: 11px;
	color: #cbcbcb;
	font-family: 'Gotham Pro Regular'
`;

class Header extends React.Component {

	render() {
		return(
			<div className="header">
				<Wrapper>
					<Span>
						<img src={logo}></img>
					</Span>	
					<Span>
						<H2>granit</H2>
						<P>Доставка нерудных материалов</P>
					</Span>
				</Wrapper>
				<Wrapper>
					<Span>
						<H3>8 800 342-13-33</H3>
						<P>Бесплатный звонок по России</P>
					</Span>
					<Span>
						<Button>Обратный звонок</Button>
					</Span>
				</Wrapper>
			</div>
		)
	}
}

export default Header;