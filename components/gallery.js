// STYLES
import { StylesGalleryGrid, StyledGalleryWrapper } from './Styles';

const Gallery = ({ content }) => (
	<StyledGalleryWrapper column start>
		<StylesGalleryGrid dangerouslySetInnerHTML={{ __html: content }} />
	</StyledGalleryWrapper>
);

export default Gallery;
