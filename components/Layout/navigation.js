/* eslint-disable jsx-a11y/anchor-is-valid, react-hooks/rules-of-hooks */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// LOGO
import logo from '../../public/logo.png';

// COMPONENTS
import Burger from '../items/Burger';
import SubMenu from '../items/submenu';

// STYLES
import { StyledLogoWrapper, StyledButton, StyledText } from '../StylesGeneral';
import {
	StyledNavWrapper,
	StyledNavMenuWrapper,
	StyledNavText,
	StyledMenuWrapper,
	StyledMobileMenuWrapper,
	StyledMobileMenu,
	StyledMobileNavWrapper,
	StyledLayout,
	StyledMobileBodyWrapper,
	StyledBurgerWrapper,
	StyledSubMenuWrapper,
	StyledMobileButtonsWrapper,
	StyledSocials,
	StyledDropdown,
	StyledMobileDropdown,
	StyledNavDropdownText,
} from './Styles';

const Navigation = ({ menuItems, footerItems, hideSubMenu }) => {
	const router = useRouter();

	const menuArray = [];
	if (menuItems) {
		menuItems?.forEach((item) => {
			if (!item?.node?.parentId) menuArray.push(item?.node);
		});
	}

	return (
		<StyledMenuWrapper>
			<StyledNavWrapper submenu hideSubMenu={hideSubMenu}>
				<StyledSubMenuWrapper>
					{footerItems && <SubMenu footerItems={footerItems} />}

					<Link href="/kontakt" passHref>
						<a>
							<StyledText h5 white bold hover>
								WYŚLIJ ZAPYTANIE
							</StyledText>
						</a>
					</Link>
				</StyledSubMenuWrapper>
			</StyledNavWrapper>

			<StyledNavWrapper>
				{logo && (
					<StyledNavMenuWrapper>
						<StyledLogoWrapper>
							<Link href="/" passHref>
								<a>
									<Image alt="Nad Zalewem" src={logo} layout="fill" objectFit="cover" />
								</a>
							</Link>
						</StyledLogoWrapper>
					</StyledNavMenuWrapper>
				)}

				{menuArray && (
					<StyledNavMenuWrapper>
						{menuArray?.map((item) => {
							const [showDropdown, setShowDropdown] = useState(false);

							return (
								<div
									key={item?.id}
									style={{ position: 'relative', overflow: 'visible' }}
									onMouseEnter={() => setShowDropdown(true)}
								>
									<div>
										<Link href={item?.path} passHref>
											<StyledNavText active={router?.pathname === item?.path ?? true}>{item?.label}</StyledNavText>
										</Link>

										{item?.childItems?.edges?.length > 0 && (
											<FontAwesomeIcon
												icon={showDropdown ? faChevronUp : faChevronDown}
												style={{ fontSize: '1rem', marginLeft: '0.5rem' }}
											/>
										)}
									</div>

									{showDropdown && item?.childItems?.edges?.length > 0 && (
										<StyledDropdown onMouseLeave={() => setShowDropdown(false)}>
											<div>
												{item?.childItems?.edges?.map((child) => (
													<Link href={child?.node?.path} key={child?.node?.path} passHref>
														<StyledNavDropdownText active={router?.pathname === item?.path ?? true}>
															{child?.node?.label}
														</StyledNavDropdownText>
													</Link>
												))}
											</div>
										</StyledDropdown>
									)}
								</div>
							);
						})}
					</StyledNavMenuWrapper>
				)}
			</StyledNavWrapper>
		</StyledMenuWrapper>
	);
};

const NavigationMobile = ({ menuItems, footerItems, children }) => {
	const router = useRouter();
	const [asideMenu, setAsideMenu] = useState(false);
	const findSocialItemType = (values, type) => values?.find((item) => item?.label === type);

	const menuArray = [];
	if (menuItems) {
		menuItems?.forEach((item) => {
			if (!item?.node?.parentId) menuArray.push(item.node);
		});
	}

	return (
		<StyledMobileNavWrapper>
			{children && <StyledLayout>{children}</StyledLayout>}

			<StyledMobileMenuWrapper>
				{logo && (
					<StyledNavMenuWrapper>
						<StyledLogoWrapper>
							<Link href="/" passHref>
								<a>
									<Image alt="Nad Zalewem" src={logo} layout="fill" objectFit="cover" />
								</a>
							</Link>
						</StyledLogoWrapper>
					</StyledNavMenuWrapper>
				)}

				<StyledMobileButtonsWrapper>
					<StyledSocials>
						{findSocialItemType(footerItems, 'Facebook') && (
							<Link href={findSocialItemType(footerItems, 'Facebook')?.path} passHref target="_blank">
								<a
									aria-label={findSocialItemType(footerItems, 'Facebook')?.label}
									alt={findSocialItemType(footerItems, 'Facebook')?.label}
								>
									<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
								</a>
							</Link>
						)}

						{findSocialItemType(footerItems, 'Instagram') && (
							<Link href={findSocialItemType(footerItems, 'Instagram')?.path} passHref target="_blank">
								<a
									aria-label={findSocialItemType(footerItems, 'Instagram')?.label}
									alt={findSocialItemType(footerItems, 'Instagram')?.label}
								>
									<FontAwesomeIcon icon={faInstagramSquare} className="fa-xl" />
								</a>
							</Link>
						)}
					</StyledSocials>

					<StyledBurgerWrapper asideMenu={asideMenu}>
						<StyledButton burger type="button" name="Close" aria-label="Close" onClick={() => setAsideMenu(!asideMenu)}>
							<Burger />
						</StyledButton>
					</StyledBurgerWrapper>
				</StyledMobileButtonsWrapper>
			</StyledMobileMenuWrapper>

			<StyledMobileMenu asideMenu={asideMenu}>
				<StyledMobileBodyWrapper>
					{menuArray && (
						<>
							{menuArray?.map((item) => {
								const [showDropdown, setShowDropdown] = useState(false);

								return (
									<div key={item?.label}>
										<div>
											<Link href={item?.path} passHref>
												<StyledNavText
													type="button"
													onClick={() => setAsideMenu(!asideMenu)}
													active={router?.pathname === item?.path ?? true}
												>
													{item?.label}
												</StyledNavText>
											</Link>

											{item?.childItems?.edges?.length > 0 && (
												<button
													type="button"
													onClick={() => setShowDropdown(!showDropdown)}
													style={{ background: 'transparent', border: 'none' }}
												>
													<FontAwesomeIcon
														icon={showDropdown ? faChevronUp : faChevronDown}
														style={{ fontSize: '1rem', marginLeft: '0.5rem', color: 'white' }}
													/>
												</button>
											)}
										</div>

										{showDropdown && item?.childItems?.edges?.length > 0 && (
											<StyledMobileDropdown
												onMouseLeave={() => {
													setShowDropdown(false);
													setAsideMenu(!asideMenu);
												}}
											>
												{item?.childItems?.edges?.map((child) => (
													<Link href={child?.node?.path} key={child?.node?.path} passHref>
														<StyledNavDropdownText active={router?.pathname === item?.path ?? true}>
															{child?.node?.label}
														</StyledNavDropdownText>
													</Link>
												))}
											</StyledMobileDropdown>
										)}
									</div>
								);
							})}
						</>
					)}
				</StyledMobileBodyWrapper>
			</StyledMobileMenu>
		</StyledMobileNavWrapper>
	);
};

Navigation.Mobile = NavigationMobile;
export default Navigation;
