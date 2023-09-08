import dynamic from 'next/dynamic';

// STYLES
import { StyledHomeContainer } from './Styles';

// COMPONENTS
const SliderSection = dynamic(() => import('./sections/SliderSection'));
const Summary = dynamic(() => import('./sections/Summary'));
const ContentBlocks = dynamic(() => import('./sections/ContentBlocks'));

const HomePage = ({ homePageData }) => (
	<>
		{homePageData && (
			<StyledHomeContainer>
				<SliderSection slider={homePageData?.slider?.slider} sliderBlocks={homePageData?.slider_blocks?.sliderBlocks} />
				<ContentBlocks contentBlocks={homePageData?.content_blocks?.contentBlocks} />
				<Summary summary={homePageData?.content_blocks?.contentBlocks?.summary} />
			</StyledHomeContainer>
		)}
	</>
);

export default HomePage;
