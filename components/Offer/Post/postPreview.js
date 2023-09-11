import Link from 'next/link';
import Image from 'next/image';

// COMPONENTS
import { StyledText } from '../../StylesGeneral';

// STYLES
import { StyledPostPreviewWrapper, StyledCoverImg } from './Styles';
import { StyledMorePostWrapper } from '../Styles';

const PostPreview = ({ title, featuredImage, slug }) => (
	<Link href={`/oferta/${slug}`} passHref>
		<StyledPostPreviewWrapper>
			{featuredImage && (
				<StyledCoverImg>
					<Image layout="fill" alt={title} src={featuredImage?.node?.sourceUrl} objectFit="cover" />
				</StyledCoverImg>
			)}

			<StyledMorePostWrapper>
				<StyledText h2 semiBold white pointer padding="0">
					{title}
				</StyledText>
			</StyledMorePostWrapper>
		</StyledPostPreviewWrapper>
	</Link>
);

export default PostPreview;
