import styled from 'styled-components';

// POST PREVIEW
export const StyledPostPreviewWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: left;

	p {
		cursor: pointer;
		overflow: hidden;
	}
`;

export const StyledPostPrevInfo = styled.div`
	min-height: 10rem;

	> div {
		display: flex;
		align-items: left;
		justify-content: space-around;
		min-height: 10rem;
		flex-flow: column wrap;
		gap: 0.5rem;
	}
`;

export const StyledCoverImg = styled.div`
	cursor: pointer;
	position: relative;
	width: 100%;
	height: 100%;
	min-height: 20rem;

	${({ theme }) => theme.shadow};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		min-width: 30rem;
	}

	:hover {
		transform: scale(1.01);
	}
	> * {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;
