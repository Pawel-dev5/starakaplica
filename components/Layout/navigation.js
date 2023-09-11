/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

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
} from './Styles';

const Navigation = ({ menuItems, footerItems, hideSubMenu }) => {
	const router = useRouter();

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

				{menuItems && (
					<StyledNavMenuWrapper>
						{menuItems?.map((item) => (
							<Link href={item?.node?.path} passHref key={item?.node?.id}>
								<StyledNavText active={router?.pathname === item?.node?.path ?? true}>{item?.node?.label}</StyledNavText>
							</Link>
						))}
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

			<StyledMobileMenu asideMenu={asideMenu} onClick={() => setAsideMenu(!asideMenu)}>
				<StyledMobileBodyWrapper>
					{menuItems && (
						<>
							{menuItems?.map((item) => (
								<Link href={item?.node?.path} passHref key={item?.node?.id}>
									<StyledNavText customPadding="0.5rem" active={router?.pathname === item?.node?.path ?? true}>
										{item?.node?.label}
									</StyledNavText>
								</Link>
							))}
						</>
					)}
				</StyledMobileBodyWrapper>
			</StyledMobileMenu>
		</StyledMobileNavWrapper>
	);
};

Navigation.Mobile = NavigationMobile;
export default Navigation;
