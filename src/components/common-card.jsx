import { moneyFormatter } from "../formatters/number-formatter";
import {
  StyledCommonCard,
  StyledTransactionsRecentsIcons,
  StyledTransactionTitle,
  StyledTransactionDescription,
} from "./common-card.styled";

export function CommonCard({ transaction }) {
  return (
    <StyledCommonCard>
      <StyledTransactionsRecentsIcons />
      <div>
        <StyledTransactionTitle>{transaction.title}</StyledTransactionTitle>
        <StyledTransactionDescription>
          {transaction.description}
        </StyledTransactionDescription>
      </div>

      <div>
        <StyledTransactionTitle status={transactionStatus(transaction)}>
          {transactionStatus(transaction)} {moneyFormatter(transaction.value)}
        </StyledTransactionTitle>
        <StyledTransactionDescription>
          {valueDate(transaction)}
        </StyledTransactionDescription>
      </div>
    </StyledCommonCard>
  );
}

const transactionStatus = (transaction) => {
  if (transaction.invoicedAt) {
    return "-";
  }
  if (transaction.receivedAt) {
    return "+";
  }
};

const valueDate = (transaction) => {
  if (transaction.invoicedAt) {
    return transaction.invoicedAt;
  }
  if (transaction.receivedAt) {
    return transaction.receivedAt;
  }
};
