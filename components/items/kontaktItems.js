import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faPhoneVolume, faEnvelopeOpen, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// STYLES
import { StyledFooterAdres, StyledTelWrapper, StyledContact, StyledAdressWrapper } from './Styles';
import { StyledText, StyledSubMenu } from '../StylesGeneral';

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: 1.3rem;
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

							<StyledText
								footer={color === 'black' ?? true}
								h4={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								textAlign="left"
							>
								<a href={`tel:${findItemType(footerItems, 'phone')?.label}`}>{findItemType(footerItems, 'phone')?.label}</a>
							</StyledText>
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

							<StyledText
								footer={color === 'black' ?? true}
								h4={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								textAlign="left"
								width="100%"
							>
								<a href={`mailto:${findItemType(footerItems, 'email')?.label}`}>
									{findItemType(footerItems, 'email')?.label}
								</a>
							</StyledText>
						</StyledAdressWrapper>
					</StyledFooterAdres>

					<StyledFooterAdres>
						<StyledIcon icon={faMapMarkerAlt} className="fa-xl" />

						<StyledAdressWrapper>
							<StyledText
								footer={color === 'black' ?? true}
								h4={color === 'white' ?? true}
								h3={color === 'black' ?? true}
								textAlign="left"
							>
								{findItemType(footerItems, 'http://adres')?.label}
							</StyledText>
						</StyledAdressWrapper>
					</StyledFooterAdres>
				</>
			)}
		</StyledContact>
	);
};

const ContactPageItems = ({ adres, telefon, color }) => (
	<StyledContact color={color}>
		{adres && telefon && (
			<>
				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faHome} className="fa-xl" />
						<StyledText footer={color === 'black' ?? true} h5={color === 'white' ?? true} h3={color === 'black' ?? true}>
							{adres?.tytul}
						</StyledText>
					</div>

					<StyledAdressWrapper>
						<StyledText
							footer={color === 'black' ?? true}
							h3={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							footerAdres={color === 'black' ?? true}
							textAlign="left"
						>
							{adres?.adres}
						</StyledText>
						<StyledText
							footer={color === 'black' ?? true}
							h5={color === 'white' ?? true}
							h3={color === 'black' ?? true}
							textAlign="left"
						>
							{adres?.nip}
						</StyledText>
					</StyledAdressWrapper>
				</StyledFooterAdres>

				<StyledFooterAdres>
					<div>
						<StyledIcon icon={faPhone} className="fa-xl" />

						<StyledText footer={color === 'black' ?? true} h5={color === 'white' ?? true} h3={color === 'black' ?? true}>
							{telefon?.tytul}
						</StyledText>
					</div>

					<StyledTelWrapper>
						<StyledSubMenu footer href={`tel:${telefon?.telefon}`}>
							<StyledText h5={color === 'white' ?? true} h3={color === 'black' ?? true} black={color === 'black' ?? true}>
								{telefon?.telefon}
							</StyledText>
						</StyledSubMenu>

						<StyledSubMenu footer href={`tel:${telefon?.telefon2}`}>
							<StyledText h5={color === 'white' ?? true} h3={color === 'black' ?? true} black={color === 'black' ?? true}>
								{telefon?.telefon2}
							</StyledText>
						</StyledSubMenu>

						<StyledSubMenu footer href={`mailto:${telefon?.email}`}>
							<StyledText h5={color === 'white' ?? true} h3={color === 'black' ?? true} black={color === 'black' ?? true}>
								{telefon?.email}
							</StyledText>
						</StyledSubMenu>
					</StyledTelWrapper>
				</StyledFooterAdres>
			</>
		)}
	</StyledContact>
);

KontaktItems.KontaktPage = ContactPageItems;
export default KontaktItems;
