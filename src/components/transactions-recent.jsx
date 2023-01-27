import {
  StyledTransactionsRecent,
  StyledTransactionsRecentTitle,
} from "./transactions-recent.styled";
import { StyledTransactionsRecentsCard } from "./common-card.styled";
import { CommonCard } from "./common-card";
import { getRecentTransactions } from "../services/transactions-service";
import { TransactionsList } from "./transactions-list";

export function TransactionsRecent() {
  const data = getRecentTransactions();

  return <TransactionsList title="Transações recentes" items={data} seeAll />;
}
