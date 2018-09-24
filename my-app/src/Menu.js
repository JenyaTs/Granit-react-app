import React, { Component } from 'react';
import styled from "styled-components";

const MainMenu = styled.ul`
	display: flex;
	justify-content: center;
	width: 940px;
	height: 60px;
	padding: 0;
	margin: 5px auto 0;
	background-color: #ffcc00;
	z-index: 10;
`;

const Li = styled.li`
	list-style: none;
	margin: 18px 40px;
`;

const A = styled.a`
	font-family: 'Gotham Pro Medium';
	font-size: 14px;
	text-decoration: none;
	color: #000;
`;

class Menu extends React.Component {

	render() {
		return(
				<div>
					<MainMenu>
						<Li><A href="#">Главная</A></Li>
						<Li><A href="#">Каталог</A></Li>
						<Li><A href="#">Услуги</A></Li>
						<Li><A href="#">Доставка</A></Li>
						<Li><A href="#">О компании</A></Li>
						<Li><A href="#">Контакты</A></Li>
					</MainMenu>
				</div>
			)
	}
}
export default Menu;