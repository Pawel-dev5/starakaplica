import styled, { css } from 'styled-components';

export const StyledFooterAdres = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	width: 100%;
	min-height: 3rem;

	svg {
		cursor: pointer;
		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledContaktItemsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 2rem;
	width: 100%;
	min-height: 3rem;

	svg {
		min-width: 2rem;
		cursor: pointer;
		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledSubMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const StyledContact = styled.div`
	color: ${({ theme }) => theme.black};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	min-width: 30%;

	* {
		color: ${({ theme }) => theme.black};
	}

	${({ color }) =>
		color === 'white' &&
		css`
			color: ${({ theme }) => theme.white};

			* {
				color: ${({ theme }) => theme.white};
			}
		`}

	${({ color }) =>
		color === 'black' &&
		css`
			color: ${({ theme }) => theme.black};

			* {
				color: ${({ theme }) => theme.black};
			}
		`}
`;

export const StyledAdressWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 8rem;
	width: 100%;

	span {
		width: 90%;
		line-height: 1.5rem;
	}
`;

export const StyledNavText = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 1rem;

	:hover,
	:active,
	:focus {
		text-decoration: underline;
		color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
	}

	${({ active }) =>
		active &&
		css`
			font-weight: ${({ theme }) => theme.semiBold};
			text-decoration: underline;
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		`}

	${({ customPadding }) =>
		customPadding &&
		css`
			padding: ${customPadding};
		`}
`;

export const StyledMessangerIcon = styled.a`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	bottom: 0px;
	right: 0px;
	width: 80px;
	height: 80px;
	border-radius: 50%;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		bottom: 20px;
		right: 20px;
	}

	transition: all 0.2s ease-in-out;
	:hover {
		transform: scale(1.2);
	}
`;
