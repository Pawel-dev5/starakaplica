import { StyledContainer } from '../StylesGeneral';

const Container = ({ children }: { children: any }) => <>{children && <StyledContainer>{children}</StyledContainer>}</>;
export default Container;
