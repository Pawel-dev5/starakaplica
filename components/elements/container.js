import { StyledContainer } from '../StylesGeneral';

const Container = ({ children }) => <>{children && <StyledContainer>{children}</StyledContainer>}</>;
export default Container;
