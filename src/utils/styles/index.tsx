import styled from 'styled-components';

export const DiscordLoginButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 350px;
background-color: #5865f2;
padding: 4px 50px;
box-sizing: border-box;
border-radius: 5px;
border: 1px transparent;
margin: 4px 0;
`;

export const SupportButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 350px;
background-color: #4f545c;
padding: 4px 50px;
box-sizing: border-box;
border-radius: 5px;
border: 1px;
`;

export const MainButton = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
  background-color: #2121217d;
  padding: 4px 50px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #58585863;
  margin: 10px 0;
  box-shadow: 0px 1px 5px 0px #00000018;
`;

export const TextButton = styled(MainButton)`
padding: 18px 20px;
width: 300px;

`;

export const HomePageStyle = styled.div`
height: 100%;
padding: 100px 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const GuildMenuItemStyle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 4px 20px;
background-color: #36393f;
border-radius: 5px;
border: 1px solid #ffffff2f;
margin: 8px 0;
`;

export const Container = styled.div`
width: 1200px;
margin: 0 auto
`;

export const AppBarStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 35px;
box-sizing: border-box;
border-bottom: 1px solid #c9c9c921
`;

export const Title = styled.p`
  font-size: 22px;
`;

type FlexProps = Partial<{
  alignItems: string;
  justifyContent: string;
  flexDirection: string;
}>;

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
`;

type ButtonProps = {
  varient: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
padding: 10px 20px;
outline: none;
border: none;
font-size: 14px;
color: #ffffff;
${({ varient }) =>
  varient === 'primary' &&
  css`
background-color: #5865f2;
`}
${({ varient }) =>
  varient === 'secondary' &&
  css`
background-color: #3d3d3d;
`}
`;

export const Page = styled.div`
padding: 50px;
`;

export const Select = styled.select`
padding: 10px;
background-color: #FFF;
border-radius: 5px;
`;
