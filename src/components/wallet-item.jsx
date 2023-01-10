import styled from "styled-components";
import { toMoneyString } from "../money-formatter";

const StyledWalletItem = styled.div`
  display: flex;

  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ececef;
  }

  & p {
    margin: 0;
  }

  & .__content {
    flex: 1;
  }
`;

const StyledWalletItemMoney = styled.span`
  font-size: 1.125rem;
`;

export function WalletItem({ id, title, value }) {
  return (
    <StyledWalletItem>
      <div className="__content">
        <p>{title}</p>
      </div>
      <div>
        <StyledWalletItemMoney>{toMoneyString(value)}</StyledWalletItemMoney>
      </div>
    </StyledWalletItem>
  );
}
