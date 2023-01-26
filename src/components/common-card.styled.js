import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
`;

export const StyledTransactionsRecents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding-top: 18px;
  margin-left: 14px;
  margin-right: 14px;
  padding-bottom: 18px;

  & span {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.size.small}px;
    line-height: 16px;
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

export const StyledCommonCardAccounts = styled.div`
  flex: 1;

  & h4 {
    font-size: ${({ theme }) => theme.font.size.middle}px;
    font-weight: 600;
    margin: 0;
    line-height: 18px;
  }
`;

export const StyledTransactionsRecentsValues = styled.div`
  text-align: end;
  & h4 {
    color: ${({ theme }) => theme.colors.red};
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.size.middle}px;
    margin: 0;
    line-height: 18px;
  }
`;

export const StyledTransactionsRecentsCard = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
