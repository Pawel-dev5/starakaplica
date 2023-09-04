/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// COMPONENTS
import { Container } from '../elements';
import { KontaktItems } from '../items';

// STYLES
import { StyledFooterWrapper, StyledFooter, StyledSubFooter, StyledSocialWrapper } from './Styles';
import { StyledText } from '../StylesGeneral';

const Footer = ({ footerItems, menuItems }) => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	const findItemType = (values, type) => values?.find((item) => item?.type === type);
	const findSocialItemType = (values, type) => values?.find((item) => item?.label === type);

	console.log(footerItems);
	console.log(findItemType(footerItems, 'title'));

	return (
		<Container>
			<StyledFooter>
				<StyledFooterWrapper>
					<StyledSocialWrapper>
						<StyledText white h3 bold>
							{findItemType(footerItems, 'title')?.label}
						</StyledText>

						<StyledText white h4>
							{findItemType(footerItems, 'description')?.label}
						</StyledText>

						<StyledText white h3 bold>
							{findItemType(footerItems, 'socialTitle')?.label}
						</StyledText>

						<div>
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
						</div>
					</StyledSocialWrapper>

					<div>
						<StyledText center h3 bold white>
							MENU
						</StyledText>
						<div>
							{menuItems?.map((item) => (
								<StyledText left h5 white key={item?.node?.id}>
									{item?.node?.label}
								</StyledText>
							))}
						</div>
					</div>

					{footerItems && <KontaktItems footerItems={footerItems} color="white" />}
				</StyledFooterWrapper>

				<StyledSubFooter>
					<StyledText center h5 white>
						© {year} Wszelkie prawa zastrzeżone. Restauracja Stara Kaplica. Made by Paweł Nowecki
					</StyledText>

					<Link href="https://www.facebook.com/starakaplicarestauracja" passHref>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a alt="Facebook" aria-label="Facebook">
							<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
						</a>
					</Link>
				</StyledSubFooter>
			</StyledFooter>
		</Container>
	);
};
export default Footer;
