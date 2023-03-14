import styled from "styled-components";

export const StyledProfile = styled.div`
  padding-top: 70px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  align-items: center;
  text-align: center;

  & h4 {
    font-size: ${({ theme }) => theme.font.size.default}px;
    font-weight: 400;
  }

  & p {
    font-size: ${({ theme }) => theme.font.size.small}px;
    font-weight: 700;
  }
`;
