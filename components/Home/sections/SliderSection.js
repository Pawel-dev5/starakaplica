import Image from 'next/image';
import Carousel from 'react-multi-carousel';

// STYLES
import { StyledText } from '../../StylesGeneral';
import {
	StyledCarouselWrapper,
	StyledMainOverlay,
	StyledOverlay,
	StyledFirstSectionWrapper,
	StyledOverlayText,
	StyledSliderBlockItemsContainer,
} from '../Styles';
import { StyledLine } from '../../Layout/Styles';

const responsive = {
	all: {
		breakpoint: { max: 4000, min: 0 },
		items: 1,
	},
};

const SliderSection = ({ slider, sliderBlocks }) => {
	let sliderItems = [];
	let sliderBlocksItems = [];
	if (slider) {
		sliderItems = Object.values(slider)?.filter((item) => typeof item === 'object');
	}
	if (sliderBlocks) {
		sliderBlocksItems = Object.values(sliderBlocks)?.filter((item) => typeof item === 'object');
	}

	return (
		<StyledFirstSectionWrapper>
			{sliderItems && (
				<StyledCarouselWrapper>
					<Carousel
						containerClass="container-with-dots"
						itemClass="image-item"
						responsive={responsive}
						ssr
						infinite
						showDots={false}
						arrows
						swipeable
						autoPlay
						autoPlaySpeed={5000}
						transitionDuration={500}
					>
						{sliderItems?.map(({ image, title, description, fieldGroupName }) => (
							<StyledMainOverlay key={fieldGroupName}>
								<Image src={image?.sourceUrl} alt={image?.altText} layout="fill" />

								<StyledOverlayText>
									<StyledText white h1 semiBold>
										{title}
									</StyledText>

									<StyledText white h2 padding="1rem">
										{description}
									</StyledText>
								</StyledOverlayText>

								<StyledOverlay />
							</StyledMainOverlay>
						))}
					</Carousel>
				</StyledCarouselWrapper>
			)}

			{sliderBlocksItems && (
				<StyledSliderBlockItemsContainer>
					{sliderBlocksItems?.map(({ title, description }) => (
						<div key={title}>
							<StyledText white h2 semiBold>
								{title}
							</StyledText>

							<StyledLine homeSlider />

							<StyledText white h3>
								{description}
							</StyledText>
						</div>
					))}
				</StyledSliderBlockItemsContainer>
			)}
		</StyledFirstSectionWrapper>
	);
};
export default SliderSection;
