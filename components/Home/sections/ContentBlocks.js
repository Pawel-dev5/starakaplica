import Image from 'next/image';

// STYLES
import { StyledText } from '../../StylesGeneral';
import { StyledContentImage, StyledContentContainer } from '../Styles';

const ContentBlocks = ({ contentBlocks }) => {
	let contentBlocksItems = [];

	if (contentBlocks) {
		contentBlocksItems = Object.values(contentBlocks)?.filter((item) => typeof item === 'object');
	}

	return (
		<StyledContentContainer>
			{contentBlocksItems?.map(({ image, description }) => (
				<div key={description}>
					<StyledContentImage>
						<Image src={image?.sourceUrl} alt={image?.altText} layout="fill" objectFit="cover" />
					</StyledContentImage>

					<StyledText black h2 paddingdesktop="4rem" semiBold lh="2rem">
						{description}
					</StyledText>
				</div>
			))}
		</StyledContentContainer>
	);
};
export default ContentBlocks;
