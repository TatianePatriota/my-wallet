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

  & strong {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size.default}px;
  }
`;

export const StyledHomeRsumeBalance = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.gutter.large}px ${({ theme }) => theme.gutter.small}px ${({ theme }) => theme.gutter.small}px;
  margin: ${({ theme }) => theme.gutter.large}px ${({ theme }) => theme.gutter.default}px;
  border-radius: 8px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.white};
`