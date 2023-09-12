import styled, { css } from 'styled-components';

export const StyledMobileBodyWrapper = styled.div`
	position: fixed;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.6rem;
`;

// NAVIGATION
export const StyledNavText = styled.button`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 0.9rem;
	white-space: nowrap;
	background: transparent;
	border: none;
	cursor: pointer;

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

	${({ submenu }) =>
		submenu &&
		css`
			padding: 0 0.8rem;
			font-size: 0.85rem;
		`}
  
  ${({ customPadding }) =>
		customPadding &&
		css`
			padding: ${customPadding};
		`}
`;

export const StyledNavDropdownText = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.white};
	font-size: 0.9rem;
	white-space: nowrap;

	:hover,
	:active,
	:focus {
		text-decoration: underline;
	}
`;

export const StyledDropdown = styled.div`
	text-align: left;
	position: absolute;
	bottom: -110px;
	left: -15px;
	padding-top: 0rem;
	background: transparent;

	> div {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		padding: 1rem;
		background: ${({ theme }) => theme.black};
	}
`;
export const StyledMobileDropdown = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 1rem;
	gap: 0.5rem;
	text-align: center;
`;

export const StyledNavMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1.6rem;
	overflow: visible;
`;

export const StyledNavWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 6rem;
	padding: ${({ theme }) => theme.containerPadding};
	overflow: visible;

	${({ submenu }) =>
		submenu &&
		css`
			height: 39%;
			max-width: none;
			background: ${({ theme }) => theme.black};

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				padding: 6rem 0;
				height: 44%;
				flex-direction: column;

				> div {
					display: flex;
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: justify;
					justify-content: space-between;
					flex-direction: column;
					padding-top: 4rem;
					gap: 0.6rem;
				}
			}
		`}

	${({ hideSubMenu }) =>
		hideSubMenu &&
		css`
			display: none;
		`}
`;

export const StyledSubMenuWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	height: 50px;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		height: 40px;
	}
`;

// LAYOUT
export const StyledLayout = styled.main`
	position: relative;
	width: 100%;
	height: 100%;
	min-height: ${({ theme }) => theme.homePageFirstSectionHeight};
	background: ${({ theme }) => theme.white};
`;

export const StyledImageWrapper = styled.div`
	position: relative;
	min-width: 300px;
	min-height: 100px;
	max-width: 400px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 100%;
	span {
		object-fit: cover;
		img {
			object-fit: cover;
		}
	}
`;

// FOOTER
export const StyledFooterWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	width: 100%;
	max-width: 1220px;
	flex-direction: column;
	padding: 1rem 2rem;
	overflow: visible;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		gap: 2.5rem;
		padding: 3rem 0;
		flex-direction: row;
		margin-top: 4rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding: 0;
		gap: 3rem;
		margin-top: 8rem;
		margin-bottom: 4rem;
	}
`;

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.baseGray};
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: ${({ theme }) => theme.containerPadding};
	overflow: visible;

	svg {
		cursor: pointer;
		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledIconWrapper = styled.div`
	height: 3rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
`;

export const StyledCTAButton = styled.div`
	height: 3.5rem;
	width: 15rem;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	background-color: ${({ theme }) => theme.white};
	border: 1px solid ${({ theme }) => theme.black};

	a {
		color: ${({ theme }) => theme.black};
		font-size: 1.125rem;
		font-weight: 500;
		white-space: nowrap;
	}

	:hover {
		border: 1px solid ${({ theme }) => theme.white};
		background-color: ${({ theme }) => theme.black};
		a {
			color: ${({ theme }) => theme.white};
		}
	}
`;

export const StyledCTAWrapper = styled.div`
	height: 11rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.black};
	position: absolute;
	top: -14rem;
	flex-direction: column;
	gap: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 85%;
		justify-content: space-between;
		height: 7rem;
		padding: ${({ theme }) => theme.containerPadding};
		flex-direction: row;
		top: -7.5rem;
	}
`;

export const StyledSocials = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
`;

export const StyledMenuItemsContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	gap: 0.3rem;
`;

export const StyledCTAText = styled.h1`
	font-size: 1.5rem;
	color: ${({ theme }) => theme.white};
	white-space: nowrap;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		font-size: 2rem;
	}
`;

export const StyledMenuContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
	min-width: 20%;
`;

export const StyledSocialWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-direction: column;
	gap: 1rem;
	min-width: 40%;
`;

export const StyledCopyright = styled.div`
	width: 100%;
	height: 2rem;
`;

export const StyledMenuWrapper = styled.div`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		position: -webkit-fixed; /* Safari */
		position: fixed;
		width: 100%;
		z-index: 999;
		overflow: visible;
		top: 0;
		background-color: ${({ theme }) => theme.transparentize({ amount: 0.3, color: theme.black })};
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	svg {
		cursor: pointer;

		color: ${({ theme }) => theme.white};
		:hover {
			color: ${({ theme }) => theme.darken({ amount: 0.2, color: theme.white })};
		}
	}
`;

export const StyledMobileMenuWrapper = styled.div`
	position: -webkit-fixed; /* Safari */
	position: fixed;
	width: 100%;
	z-index: 999;
	top: 0;
	background-color: ${({ theme }) => theme.black};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${({ theme }) => theme.containerPadding};

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledMobileMenu = styled.div`
	position: absolute;
	z-index: 998;
	top: 0;
	width: 100%;
	height: 100%;
	min-height: ${({ theme }) => theme.homePageFirstSectionHeight};
	min-width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 90px;
	padding-top: 100px;
	background-color: ${({ theme }) => theme.black};

	right: -480px;
	transition: 1s;

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		right: -800px;
		transition: 1s;
	}

	${({ asideMenu }) =>
		asideMenu &&
		css`
			right: 0;
			transition: 1s;

			@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
				right: 0;
			}
		`}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		display: none;
	}
`;

export const StyledMobileNavWrapper = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
`;

export const StyledSubFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	border-top: 1px solid rgba(255, 255, 255, 0.1);
	width: 100%;
	max-width: 1220px;
	min-height: 2.8rem;
	padding: 2rem 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		flex-direction: row;
	}
	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
		padding: 0;
	}
`;

export const StyledIframe = styled.iframe`
	border: none;
	width: 100%;
	height: 400px;
	margin-bottom: -0.2rem;
	margin-top: 2rem;
`;

export const StyledLayoutHeaderText = styled.div`
	width: 100%;
	min-height: 100px;
	text-align: left;
	margin: auto;
	display: flex;
	align-items: flex-start;
	margin-bottom: 3rem;
	margin-top: 1rem;
	padding: ${({ theme }) => theme.containerPadding};
	justify-content: center;
	flex-direction: column;

	margin-top: 10rem;
	> div {
		margin-bottom: 0.5rem;
	}

	* {
		color: ${({ theme }) => theme.black};
	}
`;

export const StyledLine = styled.div`
	width: 46px;
	height: 3px;
	background-color: ${({ theme }) => theme.black};
	display: inline-block;
	position: relative;
	top: 4px;
	overflow: visible;

	::before {
		content: '';
		width: 3px;
		height: 3px;
		right: -5px;
		background-color: #000;
		display: inline-block;
		position: absolute;
	}

	::after {
		content: '';
		width: 3px;
		height: 3px;
		right: -10px;
		background-color: #000;
		display: inline-block;
		position: absolute;
	}

	${({ homeSlider }) =>
		homeSlider &&
		css`
			background: ${({ theme }) => theme.white};
			margin: 1rem 0;

			::before,
			::after {
				background: ${({ theme }) => theme.white};
			}
		`}
`;

export const StyledBurgerWrapper = styled.div`
	align-items: center;
	display: flex;
	height: 100px;
	justify-content: center;
	margin: 0;

	.container {
		cursor: pointer;
		display: flex;
		width: 60px;
		height: 100px;
	}
	svg {
		transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	path {
		transition:
			transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	path:nth-child(1) {
		transform-origin: 36% 40%;
	}
	path:nth-child(2) {
		stroke-dasharray: 29 299;
	}
	path:nth-child(3) {
		transform-origin: 35% 63%;
	}
	path:nth-child(4) {
		stroke-dasharray: 29 299;
	}
	path:nth-child(5) {
		transform-origin: 61% 52%;
	}
	path:nth-child(6) {
		transform-origin: 62% 52%;
	}

	${({ asideMenu }) =>
		asideMenu &&
		css`
			path:nth-child(1) {
				transform: translateX(9px) translateY(1px) rotate(45deg);
			}
			path:nth-child(2) {
				stroke-dasharray: 225 299;
				stroke-dashoffset: -72px;
			}
			path:nth-child(3) {
				transform: translateX(9px) translateY(1px) rotate(-45deg);
			}
			path:nth-child(4) {
				stroke-dasharray: 225 299;
				stroke-dashoffset: -72px;
			}
			path:nth-child(5) {
				transform: translateX(9px) translateY(1px) rotate(-45deg);
			}
			path:nth-child(6) {
				transform: translateX(9px) translateY(1px) rotate(45deg);
			}
			svg {
				transform: rotate(90deg);
			}
		`}
`;

export const StyledMobileButtonsWrapper = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	gap: 1rem;
	margin-right: -1.1rem;
	a {
		color: ${({ theme }) => theme.white};
	}
`;
