import styled from "styled-components";

export const StyledHeaderTransactions = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 200px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;

  & h3 {
    margin: 0;
    line-height: 1;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.gutter.small}px;
    font-weight: 400;
    padding-top: 40px;
    padding-bottom: 15px;
  }

  & p {
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.middle}px;
    /* padding-bottom: 10px; */
  }

  & h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.default * 2} px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    margin-top: 0;
    padding-bottom: 14px;
  }
`;

export const StyledIconWave = styled.svg``;
