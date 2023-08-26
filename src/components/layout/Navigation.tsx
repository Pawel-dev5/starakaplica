import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

// LOGO
import logo from '../../public/logoDW.png';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

// COMPONENTS
import Burger from '../items/Burger';
import SubMenu from '../items/submenu';

// STYLES
import { StyledLogoWrapper, StyledButton } from '../StylesGeneral';
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
} from './Styles';

const Navigation = ({ menuItems, subMenuItems, hideSubMenu }: any) => {
	const router = useRouter();

	return (
		<StyledMenuWrapper>
			<StyledNavWrapper submenu hideSubMenu={hideSubMenu}>
				<StyledSubMenuWrapper>
					{subMenuItems && <SubMenu subMenuItems={subMenuItems} />}

					<Link href="https://www.facebook.com/Restauracja-Eventy-Nad-Zalewem-163812774261061" passHref target="_blank">
						<a aria-label="Facebook" alt="Facebook">
							<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
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
						{menuItems?.map((item: any) => (
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

const NavigationMobile = ({ menuItems, subMenuItems, children }: any) => {
	const router = useRouter();
	const [asideMenu, setAsideMenu] = useState(false);

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
					<Link href="https://www.facebook.com/Restauracja-Eventy-Nad-Zalewem-163812774261061" passHref target="_blank">
						<a alt="Facebook" aria-label="Facebook">
							<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
						</a>
					</Link>
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
							{menuItems?.map((item: any) => (
								<Link href={item?.node?.path} passHref key={item?.node?.id}>
									<StyledNavText customPadding="0.5rem" active={router?.pathname === item?.node?.path ?? true}>
										{item?.node?.label}
									</StyledNavText>
								</Link>
							))}
						</>
					)}

					<StyledNavWrapper submenu>
						{subMenuItems && <SubMenu subMenuItems={subMenuItems} />}

						<Link href="https://www.facebook.com/Restauracja-Eventy-Nad-Zalewem-163812774261061" passHref>
							<a alt="Facebook" aria-label="Facebook">
								<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
							</a>
						</Link>
					</StyledNavWrapper>
				</StyledMobileBodyWrapper>
			</StyledMobileMenu>
		</StyledMobileNavWrapper>
	);
};

Navigation.Mobile = NavigationMobile;
export default Navigation;
