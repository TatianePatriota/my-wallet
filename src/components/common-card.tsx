import { moneyFormatter } from "../formatters/number-formatter";
import {
  StyledCommonCard,
  StyledTransactionsRecentsIcons,
  StyledTransactionTitle,
  StyledTransactionDescription,
} from "./common-card.styled";
import { TransactionIcon } from "./common-icons";

export enum TransactionIconName {
  Dropbox = "dropbox",
  Spotify = "spotify",
  Freelancer = "freelancer",
}

export type TransactionType = {
  title: string;
  description: string;
  id: string;
  value: number;
  invoicedAt?: string;
  receivedAt?: string;
  iconName: TransactionIconName;
};

export type CommomProps = {
  transaction: TransactionType;
};

export function CommonCard({ transaction }: CommomProps): JSX.Element {
  return (
    <StyledCommonCard>
      <StyledTransactionsRecentsIcons>
        <TransactionIcon iconName={transaction.iconName} />
      </StyledTransactionsRecentsIcons>
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

const transactionStatus = (transaction: TransactionType) => {
  if (transaction.invoicedAt) {
    return "-";
  }
  if (transaction.receivedAt) {
    return "+";
  }
};

const valueDate = (transaction: TransactionType) => {
  if (transaction.invoicedAt) {
    return transaction.invoicedAt;
  }
  if (transaction.receivedAt) {
    return transaction.receivedAt;
  }
};
