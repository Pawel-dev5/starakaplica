/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelopeOpen, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// STYLES
import { StyledFooterAdres, StyledContact, StyledAdressWrapper, StyledContaktItemsWrapper } from './Styles';
import { StyledText } from '../StylesGeneral';

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 1.3rem;
	color: #ba8a02;
	cursor: pointer;
	min-width: 2rem;
`;

const KontaktItems = ({ footerItems, color }) => {
	const findItemType = (values, type) => values?.find((item) => item?.type === type);

	return (
		<StyledContact color={color}>
			<StyledText center h3 bold white>
				{findItemType(footerItems, 'contactTitle')?.label}
			</StyledText>

			{footerItems && (
				<>
					<StyledFooterAdres>
						<StyledIcon icon={faPhoneVolume} className="fa-xl" />

						<StyledAdressWrapper>
							<StyledText
								footer={color === 'black' ?? true}
								h4={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								footerAdres={color === 'black' ?? true}
								textAlign="left"
							>
								Telefon
							</StyledText>

							<a href={`tel:${findItemType(footerItems, 'phone')?.label}`}>
								<StyledText
									footer={color === 'black' ?? true}
									h4={color === 'white' ?? true}
									h3={color === 'black' ?? true}
									textAlign="left"
									primaryHover
								>
									{findItemType(footerItems, 'phone')?.label}
								</StyledText>
							</a>
						</StyledAdressWrapper>
					</StyledFooterAdres>

					<StyledFooterAdres>
						<StyledIcon icon={faEnvelopeOpen} className="fa-xl" />

						<StyledAdressWrapper>
							<StyledText
								footer={color === 'black' ?? true}
								h4={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								footerAdres={color === 'black' ?? true}
								textAlign="left"
							>
								Adres e-mail
							</StyledText>

							<a href={`mailto:${findItemType(footerItems, 'email')?.label}`}>
								<StyledText
									footer={color === 'black' ?? true}
									h4={color === 'white' ?? true}
									h3={color === 'black' ?? true}
									textAlign="left"
									width="100%"
									primaryHover
								>
									{findItemType(footerItems, 'email')?.label}
								</StyledText>
							</a>
						</StyledAdressWrapper>
					</StyledFooterAdres>

					<StyledFooterAdres>
						<StyledIcon icon={faMapMarkerAlt} className="fa-xl" />

						<StyledAdressWrapper>
							<a href={`mailto:${findItemType(footerItems, 'http://adres')?.label}`}>
								<StyledText
									footer={color === 'black' ?? true}
									h4={color === 'white' ?? true}
									h3={color === 'black' ?? true}
									textAlign="left"
									primaryHover
								>
									{findItemType(footerItems, 'http://adres')?.label}
								</StyledText>
							</a>
						</StyledAdressWrapper>
					</StyledFooterAdres>
				</>
			)}
		</StyledContact>
	);
};

const ContactPageItems = ({ contaktitems, color }) => {
	const findItemType = (values, type) => {
		let newValue;

		Object.entries(values).forEach(([key, value]) => {
			if (key === type) {
				newValue = value;
			}
			return null;
		});
		return newValue;
	};

	return (
		<StyledContact color={color}>
			{contaktitems && (
				<>
					<StyledContaktItemsWrapper>
						<Link href={`tel:${findItemType(contaktitems, 'telefon')}`} passHref target="_blank">
							<StyledIcon icon={faPhoneVolume} style={{ fontSize: '2rem' }} />
						</Link>

						<StyledAdressWrapper>
							<StyledText footer={color === 'black' ?? true} h2 textAlign="left">
								<Link href={`tel:${findItemType(contaktitems, 'telefon')}`} passHref target="_blank">
									<a aria-label={findItemType(contaktitems, 'telefon')} alt={findItemType(contaktitems, 'telefon')}>
										{findItemType(contaktitems, 'telefon')}
									</a>
								</Link>
							</StyledText>
						</StyledAdressWrapper>
					</StyledContaktItemsWrapper>

					<StyledContaktItemsWrapper>
						<Link href={`mailto:${findItemType(contaktitems, 'adresemail')}`} passHref target="_blank">
							<StyledIcon icon={faEnvelopeOpen} style={{ fontSize: '2rem' }} />
						</Link>

						<StyledAdressWrapper>
							<StyledText footer={color === 'black' ?? true} h2 textAlign="left">
								<Link href={`mailto:${findItemType(contaktitems, 'adresemail')}`} passHref target="_blank">
									<a aria-label={findItemType(contaktitems, 'facebook')} alt={findItemType(contaktitems, 'facebook')}>
										{findItemType(contaktitems, 'adresemail')}
									</a>
								</Link>
							</StyledText>
						</StyledAdressWrapper>
					</StyledContaktItemsWrapper>

					<StyledContaktItemsWrapper>
						<StyledIcon icon={faMapMarkerAlt} style={{ fontSize: '2rem' }} />

						<StyledAdressWrapper>
							<StyledText footer={color === 'black' ?? true} h2 textAlign="left">
								<Link href={findItemType(contaktitems, 'facebook')} passHref target="_blank">
									<a aria-label={findItemType(contaktitems, 'facebook')} alt={findItemType(contaktitems, 'facebook')}>
										{findItemType(contaktitems, 'adres')}
									</a>
								</Link>
							</StyledText>
						</StyledAdressWrapper>
					</StyledContaktItemsWrapper>

					<StyledContaktItemsWrapper>
						{findItemType(contaktitems, 'facebook') && (
							<Link href={findItemType(contaktitems, 'facebook')} passHref target="_blank">
								<a aria-label={findItemType(contaktitems, 'facebook')} alt={findItemType(contaktitems, 'facebook')}>
									<FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: '2rem' }} />
								</a>
							</Link>
						)}

						<StyledText footer={color === 'black' ?? true} h2 textAlign="left">
							<Link href={findItemType(contaktitems, 'facebook')} passHref target="_blank">
								<a aria-label={findItemType(contaktitems, 'facebook')} alt={findItemType(contaktitems, 'facebook')}>
									Facebook
								</a>
							</Link>
						</StyledText>
					</StyledContaktItemsWrapper>

					<StyledContaktItemsWrapper>
						{findItemType(contaktitems, 'instagram') && (
							<Link href={findItemType(contaktitems, 'instagram')} passHref target="_blank">
								<a aria-label={findItemType(contaktitems, 'instagram')} alt={findItemType(contaktitems, 'instagram')}>
									<FontAwesomeIcon icon={faInstagramSquare} style={{ fontSize: '2rem' }} />
								</a>
							</Link>
						)}

						<StyledText footer={color === 'black' ?? true} h2 textAlign="left">
							<Link href={findItemType(contaktitems, 'instagram')} passHref target="_blank">
								<a aria-label={findItemType(contaktitems, 'instagram')} alt={findItemType(contaktitems, 'instagram')}>
									Instagram
								</a>
							</Link>
						</StyledText>
					</StyledContaktItemsWrapper>
				</>
			)}
		</StyledContact>
	);
};

KontaktItems.KontaktPage = ContactPageItems;
export default KontaktItems;
