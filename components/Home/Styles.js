import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
	height: ${({ theme }) => theme.homePageFirstSectionHeight};
	width: 100%;

	.container-with-dots {
		> div {
			min-height: ${({ theme }) => theme.homePageFirstSectionHeight};
		}
		img {
			min-height: 800px !important;
			object-fit: cover;
		}
	}

	.react-multiple-carousel__arrow {
		background: transparent;
	}
`;

export const StyledMainOverlay = styled.div`
	position: relative;
	top: 0;
	height: ${({ theme }) => theme.homePageFirstSectionHeight};
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex-direction: column;

	* {
		color: ${({ theme }) => theme.white};
	}
`;

export const StyledOverlay = styled.div`
	width: 100%;
	height: 100%;
	min-height: ${({ theme }) => theme.homePageFirstSectionHeight};
	position: absolute;
	top: 0;

	${({ theme }) => theme.overlay};
`;

export const StyledFirstSectionWrapper = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 40px;
	}
`;

export const StyledOverlayText = styled.div`
	position: absolute;
	z-index: 1000000;
	display: flex;
	flex-direction: column;
	max-width: 70%;
`;

export const StyledContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${({ theme }) => theme.containerPadding};
	margin-top: 8rem;
	gap: 8rem;

	> div {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		gap: 4rem;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			gap: 3rem;
			flex-direction: row;
			> span {
				width: 50%;
			}
		}
	}
	> div:nth-child(even) {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		gap: 4rem;

		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			gap: 3rem;
			flex-direction: row-reverse;
			> span {
				width: 50%;
			}
		}
	}
`;

export const StyledContentImage = styled.div`
	width: 500px;
	height: 500px;

	* {
		position: relative !important;
		width: 500px;
		height: 500px !important;
	}
`;

export const StyledHomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledSliderBlockItemsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}

	> div {
		display: flex;
		height: 14rem;
		flex-direction: column;
		@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			width: 33.33%;
		}
	}
	> div:nth-child(even) {
		padding: 3rem;
		background: ${({ theme }) => theme.black};
	}
	> div:nth-child(odd) {
		padding: 3rem;
		background: ${({ theme }) => theme.baseGray};
	}
`;
