import styled from "styled-components";

export const StyledHomeResumeHeader = styled.div`
  margin-top: ${({ theme }) => theme.gutter.small}px;
  margin-bottom: ${({ theme }) => theme.gutter.large}px;
`;

export const StyledHomeResumeHeaderTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 1.4;
  flex: 1;

  & strong {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size.default}px;
  }
`;

export const StyledHomeResumeBalance = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.gutter.large}px
    ${({ theme }) => theme.gutter.small}px
    ${({ theme }) => theme.gutter.small}px;
  margin: ${({ theme }) => theme.gutter.large}px
    ${({ theme }) => theme.gutter.default}px;
  border-radius: 8px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.white};
  position: relative;

  & h1 {
    margin: 4px;
    line-height: 1.5;
    font-size: ${({ theme }) => theme.font.size.small * 2}px;
  }

  & h2 {
    margin: 0;
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.default}px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  & p {
    margin-top: 0;
    font-size: ${({ theme }) => theme.font.size.small}px;
  }
`;

export const StyledHomeResumeIcon = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledHomeResumeIconEllipse = styled.svg`
  position: absolute;
  top: 0;
  right: 18px;
  width: 100%;
  height: 100%;
`;
