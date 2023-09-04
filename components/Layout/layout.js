import { useState, useEffect } from 'react';

// COMPONENTS
import Seo from './seo';
import Navigation from './navigation';
import Footer from './footer';
import MessengerIcon from '../items/MessengerIcon';

// STYLES
import { StyledLayout, StyledLayoutHeader, StyledLayoutHeaderText } from './Styles';
import { StyledText } from '../StylesGeneral';

const Layout = ({
	children,
	slug,
	menuItems,
	footerItems,
	headerImg,
	headerText,
	subHeaderText,
	setAsideMenu,
	asideMenu,
	seo,
}) => {
	const [scrollDir, setScrollDir] = useState('START');
	const [footerValues, setFooterValues] = useState([]);

	const newSeo = {
		...seo,
		metatitle: seo?.metatitle ?? slug,
	};

	useEffect(() => {
		const threshold = 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}
			setScrollDir(scrollY > lastScrollY ? 'DOWN' : 'UP');
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;

			if (scrollY === 0) {
				setScrollDir('START');
			}
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollDir]);

	useEffect(() => {
		const newArr = [];
		footerItems?.forEach((item) => {
			newArr.push({ ...item?.node, type: item?.node?.path?.replace('https://', '') });
		});
		setFooterValues(newArr);
	}, []);

	return (
		<>
			<Seo {...newSeo} />

			<StyledLayout>
				{menuItems && (
					<Navigation menuItems={menuItems} footerItems={footerValues} hideSubMenu={scrollDir === 'DOWN' ?? true} />
				)}

				<Navigation.Mobile menuItems={menuItems} setAsideMenu={setAsideMenu} asideMenu={asideMenu}>
					{headerImg?.sourceUrl && <StyledLayoutHeader src={headerImg?.sourceUrl} />}

					{(subHeaderText || headerText) && (
						<StyledLayoutHeaderText isImg={headerImg?.sourceUrl}>
							{headerText && (
								<StyledText h1 black>
									{headerText}
								</StyledText>
							)}

							{subHeaderText && (
								<StyledText h3 black>
									{subHeaderText}
								</StyledText>
							)}
						</StyledLayoutHeaderText>
					)}
					{children}
				</Navigation.Mobile>

				{footerValues && <Footer footerItems={footerValues} menuItems={menuItems} />}

				<MessengerIcon />
			</StyledLayout>
		</>
	);
};

export default Layout;
