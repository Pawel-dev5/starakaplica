import styled from 'styled-components';

// MORE STORIES
export const StyledMoreStoriesWrapper = styled.section`
	text-align: center;
	width: 100%;
	display: grid;
	gap: 3rem;
	grid-template-columns: repeat(1, 1fr);
	padding: ${({ theme }) => theme.containerPadding};
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
	background: ${({ theme }) => theme.primary};

	> h2 {
		font-size: 1.75rem;
		cursor: pointer;
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

export const StyledHeroContainer = styled.div`
	padding: ${({ theme }) => theme.containerPadding};
	margin-bottom: 8rem;
`;

export const StyledTextWrapper = styled.div`
	width: 100%;

	* {
		overflow: visible;
	}
	> ul {
		margin: 1rem;
		margin-left: 2rem;
		> li {
			margin: 0.5rem;
		}
	}
`;
