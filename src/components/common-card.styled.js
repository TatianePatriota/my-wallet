import styled from "styled-components";

export const StyledTransactionTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.middle}px;
  font-weight: 600;
  line-height: 1;

  color: ${({ theme, status, color }) => {
    if (status) {
      return theme.colors[status === '-' ? 'red' : status === '+' ? 'green' : 'black']
    }
    return theme.colors[color ?? 'black']
  }};
  `

export const StyledTransactionDescription = styled.small`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.small}px;
  line-height: 1;
  `

export const StyledCommonCard = styled.div`
  display: flex;
  align-items: center;

  & div + div {
    flex: 1;
  }

  & div:last-child {
    text-align: end;
    flex: inherit;
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
    padding-top: ${({ theme }) => theme.gutter.small}px;
    margin-top: ${({ theme }) => theme.gutter.small}px;
  }

  & p, & span {
    margin: 0;
  }
`;

export const StyledTransactionsRecentsIcons = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 38px;
  height: 38px;
  border-radius: 6px;
  text-align: center;
  margin-right: 12px;
`;

export const StyledTransactionsRecentsCard = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: ${({ theme }) => theme.gutter.small}px;
`;
