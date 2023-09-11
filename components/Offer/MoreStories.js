// COMPONENTS
import { PostPreview } from './Post';

// STYLES
import { StyledMoreStoriesWrapper } from './Styles';

const MoreStories = ({ posts }) => (
	<StyledMoreStoriesWrapper>
		{posts?.map(({ node }) => (
			<PostPreview key={node.title} {...node} />
		))}
	</StyledMoreStoriesWrapper>
);

export default MoreStories;
