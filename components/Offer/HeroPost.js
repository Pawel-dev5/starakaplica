// STYLES
import { StyledHeroContainer, StyledTextWrapper } from './Styles';

const HeroPost = ({ description }) => (
	<StyledHeroContainer>
		<StyledTextWrapper customWidth dangerouslySetInnerHTML={{ __html: description?.description }} />
	</StyledHeroContainer>
);

export default HeroPost;
