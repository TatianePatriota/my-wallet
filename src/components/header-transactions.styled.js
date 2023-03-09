import styled from "styled-components";

export const StyledHeaderTransactions = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 200px;
  padding-left: 24px;
  padding-right: 24px;

  & h2 {
    margin: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.gutter.small}px;
    font-weight: 400;
    padding-top: 50px;
    padding-bottom: 15px;
  }

  & p {
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.middle}px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const StyledIconWave = styled.svg``;
