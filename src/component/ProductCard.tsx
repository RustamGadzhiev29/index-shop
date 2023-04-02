import React, {useState} from 'react';
import styles from './card.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import {Card, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleIcon from '@mui/material/ToggleButton';

const StyledCardContainer = styled.div`
    position: relative;
    font-size: 0;
	margin-right: 24px;
	margin-bottom: 24px;
	border-radius: 8px;
	width: 224px;
	height: 364px;
.card {
    width: 100%;
    height: 100%;
}
.cardMedia {
    padding: 0;
    border-radius: 5px 5px 0 0;
    height: 260px;
}
.swiper {
    .bullet {
    position: relative;
    margin-right: 8px;
    display: inline-block;
    left: 0;
    width: 8px;
    height: 8px;
    background: #c4c4c4;
    border: 1px solid #5a5a5a;
    border-radius: 50%;
    z-index: 9;
    }
    .bulletActive {
    background-color: #00a0ab;
    }
}
`;

const StyledCardContent = styled(CardContent)`
	&& {
	padding: 10px 13px 19px 12px;
}
`;

const StyledPriceIconBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	span {
    display: block;
    font-weight: var(--fw-bold);
	font-family: var(--family);
    font-size: 22px;
    line-height: 25.28px;
    color: #2c2c2c;
}
`;

const StyledFavoriteIcon = styled(FavoriteIcon)(({...props}) => ({
	color: props['aria-disabled'] ? '#00A0AB' : '#C7C7C7',
	display: 'block',
	width: '20px !important',
	height: '19px !important',
	transition: 'all 0.5s ease',
	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&:hover': {
		color: props['aria-disabled'] ? '#00A0AB' : '#A4A4A4',
		width: '23px !important',
		height: '22px !important',
	},
	cursor: 'pointer',
}));

const StyledTypography = styled(Typography)`
	&& { 
	margin-bottom: 10px;
	font-size: var(--fs-sm);
	font-weight: var(--fw-normal);
	font-family: var(--family);
	line-height: 16.09px;
	} ;
`;
const StyledBlockLocalDate = styled.div`
    display: flex;
    justify-content: space-between;
	& > span {
	font-weight: var(--fw-light);
    font-size: 12px;
    line-height: 14px;
    color: #8F8F8F;
	font-family: var(--family);
}
`;

const img1 = 'https://source.unsplash.com/random';

export function ProductCard() {
	const [active, setActive] = useState(false);
	console.log(active);
	const handleClick = () => {
		setActive(!active);
	};

	return (
		<StyledCardContainer>
			<Card className='card'>
				<Swiper
					spaceBetween={1}
					slidesPerView={1}
					navigation
					pagination={{clickable: true}}
					modules={[Pagination]}
					className='swiper'
				>
					<SwiperSlide>
						<CardMedia image={img1} className='cardMedia' />
					</SwiperSlide>
					<SwiperSlide>
						<CardMedia image={img1} className='cardMedia' />
					</SwiperSlide>
					<SwiperSlide>
						<CardMedia image={img1} className='cardMedia' />
					</SwiperSlide>
					<SwiperSlide>
						<CardMedia image={img1} className='cardMedia' />
					</SwiperSlide>
				</Swiper>
				<StyledCardContent>
					<StyledPriceIconBlock>
						<span>{1999} ₽</span>
						<StyledFavoriteIcon
							onClick={handleClick}
							aria-disabled={active}
						></StyledFavoriteIcon>
					</StyledPriceIconBlock>
					<StyledTypography variant='h3' gutterBottom>
            Название товарной позиции
					</StyledTypography>
					<StyledBlockLocalDate>
						<span> Arh </span>
						<span >12.04.2011
						</span>
					</StyledBlockLocalDate>
				</StyledCardContent>
			</Card>
		</StyledCardContainer>
	);
}
