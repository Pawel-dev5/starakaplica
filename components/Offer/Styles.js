import styled, { css } from 'styled-components';
import { StyledWrapper } from '../StylesGeneral';

// MORE STORIES
export const StyledMoreStoriesWrapper = styled.section`
	text-align: center;
	width: 100%;
	display: grid;
	gap: 3rem;
	grid-template-columns: repeat(1, 1fr);
	padding: 0 3rem;
	margin-bottom: 12rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 5rem;
		grid-template-columns: repeat(2, 1fr);
s	}
`;

// HERO POST
export const StyledHeroImgWrapper = styled.div`
	cursor: pointer;
	position: relative;
	min-height: 30rem;
	${({ theme }) => theme.shadow};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 0.5rem;
	}
`;

export const StyledHeroWrapper = styled(StyledWrapper)`
	margin: 0;
	text-align: left;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	gap: 0;

	a {
		text-decoration: none;
	}
	${({ column }) =>
		column &&
		css`
			flex-direction: column;
		`}

	> p {
		padding: 0.5rem;
		padding-left: 0;
		cursor: pointer;
	}

	${({ customWidth }) =>
		customWidth &&
		css`
			height: 30%;
			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 50%;
				height: 500px;
			}
		`}

	${({ menu }) =>
		menu &&
		css`
			height: 100%;
			width: 100%;

			@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 75%;
				height: 500px;
				margin: auto;

				div:nth-child(1) {
					width: 60%;
					height: 100%;
				}
				div:nth-child(2) {
					width: 40%;
					margin: initial;
				}
			}
		`}
`;

export const StyledMorePostWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	text-align: left;
	padding: 1rem;
	padding-left: 2rem;
	justify-content: flex-start;
	width: 100%;
	min-height: 4rem;
	cursor: pointer;
	background: ${({ theme }) => theme.black};

	> h2 {
		font-size: 1.75rem;
		cursor: pointer;
	}
`;

export const StyledSliderWrapper = styled.div`
	height: 400px;
	width: 100%;
	max-width: 600px;

	display: flex;
	align-items: center;
	justify-content: center;

	.container-with-dots {
		width: 600px;

		*:not(ul) {
			min-height: 400px;
			button {
				min-height: 25px !important;
			}
		}
		img {
			min-height: 400px !important;
			object-fit: cover;
		}
	}
`;

export const StylesMenuWrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row nowrap;
	width: 256px;
	height: 331px;

	span {
		margin: 1rem !important;

		:hover {
			transform: scale(1.1);
			transition: transform 0.5s;
		}
		img {
			width: 256px;
			height: 331px;
		}
	}
`;

export const StyledDotButton = styled.button`
	height: 25px;
	width: 25px;
	background-color: ${({ theme }) => theme.grey400};
	border-radius: 50%;
	display: inline-block;
	min-height: 25px !important;
	max-height: 25px;
`;

export const StyledTextWrapper = styled.div`
	width: 100%;
	margin: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 30%;
		margin: 0 2rem;
	}
`;
