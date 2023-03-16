import styled from "styled-components";

export const StyledProfile = styled.div`
  padding-top: 90px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  align-items: center;
  text-align: center;

  & h3 {
    margin-bottom: 0;
  }

  & h4 {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-weight: 400;
    margin-top: 14px;
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-weight: 700;
  }
`;
