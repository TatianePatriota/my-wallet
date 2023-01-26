import {
  StyledCommonCardAccounts,
  StyledTransactionsRecents,
  StyledTransactionsRecentsIcons,
  StyledTransactionsRecentsValues,
} from "./common-card.styled";
import { AccountsIcon } from "./common-icons";

export function CommonCard() {
  return (
    <StyledTransactionsRecents>
      <StyledTransactionsRecentsIcons></StyledTransactionsRecentsIcons>
      <StyledCommonCardAccounts>
        <h4>Dropbox</h4>
        <span>Assinatura</span>
      </StyledCommonCardAccounts>
      <StyledTransactionsRecentsValues>
        <h4>Valor</h4>
        <span>vencimento</span>
      </StyledTransactionsRecentsValues>
    </StyledTransactionsRecents>
  );
}
