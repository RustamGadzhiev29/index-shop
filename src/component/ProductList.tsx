import React from 'react';
import styled from 'styled-components';
import {Container} from './Container';
import useEffect from 'react';
import {useAppSelector} from '../redux/store';

type ProductListProps = {
	children: JSX.Element;
};

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeate(4, 1fr);
  gap: 4rem;

  @media (max-width: 767px) {
    grid-template-columns: repeate(1, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeate(2, 1fr);
  }
`;

const ProductList: React.FC<ProductListProps> = ({children}) => (
	<Container>
		<Wrapper>{children}</Wrapper>
	</Container>
);

export default ProductList;
