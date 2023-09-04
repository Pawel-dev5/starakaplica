/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

// STYLES
import { StyledSubMenu } from '../StylesGeneral';
import { StyledSubMenuWrapper } from './Styles';

const SubMenu = ({ footerItems }) => {
	const findItemType = (values, type) =>
		values?.find((item) => item?.path?.replace('https://', '') === type || item?.type === type);

	const findSocialItemType = (values, type) => values?.find((item) => item?.label === type);

	return (
		<StyledSubMenuWrapper>
			<StyledSubMenu href={`tel:${findItemType(footerItems, 'email')?.label}`}>
				{findItemType(footerItems, 'email')?.label}
			</StyledSubMenu>

			<StyledSubMenu href={`tel:${findItemType(footerItems, 'phone')?.label}`}>
				{findItemType(footerItems, 'phone')?.label}
			</StyledSubMenu>

			{footerItems && findSocialItemType(footerItems, 'Facebook') && (
				<Link href={findSocialItemType(footerItems, 'Facebook')?.path} passHref target="_blank">
					<a
						aria-label={findSocialItemType(footerItems, 'Facebook')?.label}
						alt={findSocialItemType(footerItems, 'Facebook')?.label}
					>
						<FontAwesomeIcon icon={faFacebookSquare} className="fa-xl" />
					</a>
				</Link>
			)}

			{footerItems && findSocialItemType(footerItems, 'Instagram') && (
				<Link href={findSocialItemType(footerItems, 'Instagram')?.path} passHref target="_blank">
					<a
						aria-label={findSocialItemType(footerItems, 'Instagram')?.label}
						alt={findSocialItemType(footerItems, 'Instagram')?.label}
					>
						<FontAwesomeIcon icon={faInstagramSquare} className="fa-xl" />
					</a>
				</Link>
			)}
		</StyledSubMenuWrapper>
	);
};

export default SubMenu;
