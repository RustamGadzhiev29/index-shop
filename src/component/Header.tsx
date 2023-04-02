import React from 'react';
import styled from 'styled-components';
import {Container} from './Container';
import list from '../assets/images/list.svg';
import ballot from '../assets/images/ballot.svg';

const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items:center;
padding: 2rem 0;
`;

const DisplayMode = styled.div`
display: flex;
width: 78px;
justify-content: space-between;
align-items:center;
cursor: pointer;
`;

const Header: React.FC = () => (
	<Container>
		<Wrapper>
			<DisplayMode>
				<img src={list} alt='logo' />
				<img src={ballot} alt='logo' />
			</DisplayMode>
		</Wrapper>
	</Container>
);

export default Header;
