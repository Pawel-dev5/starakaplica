// STYLES
import { StyledText } from '../../StylesGeneral';
import { StyledSummaryLine, StyledSummary } from './Style';

const Summary = ({ summary }) => (
	<>
		{summary && (
			<StyledSummary>
				<StyledSummaryLine />

				<StyledText black h2 semiBold textAlign="center" lh="2rem">
					{summary}
				</StyledText>
			</StyledSummary>
		)}
	</>
);
export default Summary;
