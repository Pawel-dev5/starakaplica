import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView } from 'react-hook-inview';

// ASSETS
import Image404 from '../../../public/404.png';

// STYLES
import { StyledCustomWrapper, StyledImageWrapper, StyledTextWrapper, StyledHeader, StyledDesc, StyledLink } from './Styles';

const Custom404 = () => {
	const [visible, setVisible] = useState(false);

	const [ref, isVisible] = useInView({
		threshold: 1,
	});

	useEffect(() => {
		if (isVisible) {
			setVisible(true);
		}
	}, [isVisible]);

	return (
		<StyledCustomWrapper>
			<StyledTextWrapper>
				<StyledHeader ref={ref} visible={visible}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid, react/no-unknown-property */}
					<a as="h1">
						Cześć,
						<br />
						miło Cię widzieć
					</a>
				</StyledHeader>
				<StyledDesc>
					Niestety trafiłeś na miejsce bez połączenia, co oznacza, że strona, której szukasz, nie istnieje.
				</StyledDesc>

				<span>Szukasz, którejś z naszych usług? Przejdź na:</span>

				<ul>
					<li>
						<Link href="/oferta">Oferta</Link>
					</li>
					<li>
						<Link href="/przestrzen-historia">Przestrzen i historia</Link>
					</li>
					<li>
						<Link href="/galeria">Galeria</Link>
					</li>
					<li>
						<Link href="/kontakt">Kontakt</Link>
					</li>
				</ul>

				<span>Lub wróć na stronę główną:</span>

				<StyledLink href="/">Przenieś mnie na stronę główną</StyledLink>
			</StyledTextWrapper>

			<StyledImageWrapper>
				<img src={Image404.src} alt="404 page" />
			</StyledImageWrapper>
		</StyledCustomWrapper>
	);
};

export default Custom404;
