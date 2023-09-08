import styled from 'styled-components';

export const StyledIcon = styled.div`
	padding: 1rem;
	height: initial;
	:hover {
		transform: scale(1.1);
		transition: transform 0.5s;
	}
`;

export const StyledSummary = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 4rem;
	margin: 4rem 0 10rem 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin: 0 0 5rem 0;
		padding: 5rem 8rem;
	}
`;

export const StyledSummaryLine = styled.div`
	width: 15rem;
	margin: 4rem 0;
	border: 1px solid ${({ theme }) => theme.black};
`;
