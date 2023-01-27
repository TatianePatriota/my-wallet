import styled from "styled-components";

export const StyledTransactionsRecent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.gutter.default}px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const StyledTransactionsRecentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.gutter.small}px;

  & h4,
  a.seeAll {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size.middle}px;
    font-weight: 600;
    line-height: 1.35;
    margin: 0;
  }

  & a.seeAll {
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;
