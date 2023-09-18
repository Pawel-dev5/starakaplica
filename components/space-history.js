// STYLES
import { StyledPageContainer, StyledHistoryWrapper } from './Styles';

const SpaceHistory = ({ historyData }) => (
	<StyledPageContainer>
		{historyData && <StyledHistoryWrapper dangerouslySetInnerHTML={{ __html: historyData?.content }} />}
	</StyledPageContainer>
);

export default SpaceHistory;
