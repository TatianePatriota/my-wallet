import styled from "styled-components";

export const StyledTransactionsRecentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & h4,
  h5 {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-weight: 600;
    line-height: 18px;
  }

  & h5 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
