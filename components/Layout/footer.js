/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// COMPONENTS
import { Container } from '../elements';
import { KontaktItems } from '../items';

// STYLES
import {
	StyledFooterWrapper,
	StyledFooter,
	StyledSubFooter,
	StyledSocialWrapper,
	StyledSocials,
	StyledMenuItemsContainer,
	StyledMenuContainer,
	StyledCTAWrapper,
	StyledCTAButton,
	StyledCTAText,
} from './Styles';
import { StyledText } from '../StylesGeneral';

const Footer = ({ footerItems, menuItems }) => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	const findItemType = (values, type) => values?.find((item) => item?.type === type);
	const findSocialItemType = (values, type) => values?.find((item) => item?.label === type);

	return (
		<Container>
			<StyledFooter>
				<StyledFooterWrapper>
					<StyledCTAWrapper>
						<StyledCTAText>Potrzebujesz pomocy?</StyledCTAText>

						<StyledCTAButton>
							<Link href="/kontakt" passHref>
								<a>WYŚLIJ ZAPYTANIE</a>
							</Link>
						</StyledCTAButton>
					</StyledCTAWrapper>

					<StyledSocialWrapper>
						<StyledText center h3 bold white>
							{findItemType(footerItems, 'title')?.label}
						</StyledText>

						<StyledText white h4>
							{findItemType(footerItems, 'description')?.label}
						</StyledText>

						<StyledText white h3 bold padding="1rem 0 0 0">
							{findItemType(footerItems, 'socialTitle')?.label}
						</StyledText>

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
					</StyledSocialWrapper>

					<StyledMenuContainer>
						<StyledText center h3 bold white>
							MENU
						</StyledText>

						<StyledMenuItemsContainer>
							{menuItems?.map((item) => (
								<a key={item?.node?.id} href={item?.node?.path}>
									<StyledText left h3 white>
										{item?.node?.label}
									</StyledText>
								</a>
							))}
						</StyledMenuItemsContainer>
					</StyledMenuContainer>

					{footerItems && <KontaktItems footerItems={footerItems} color="white" />}
				</StyledFooterWrapper>

				<StyledSubFooter>
					<StyledText center h5 white lh="1.1rem">
						© {year} Wszelkie prawa zastrzeżone. Restauracja Stara Kaplica. Made by Paweł Nowecki
					</StyledText>
				</StyledSubFooter>
			</StyledFooter>
		</Container>
	);
};
export default Footer;
