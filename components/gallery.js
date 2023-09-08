// STYLES
import { StylesGalleryGrid, StyledPageContainer } from './Styles';

const Gallery = ({ content }) => (
	<StyledPageContainer>
		<StylesGalleryGrid dangerouslySetInnerHTML={{ __html: content }} />
	</StyledPageContainer>
);

export default Gallery;
