import { getRecentTransactions } from "../services/transactions-service";
import { TransactionsList } from "./transactions-list";

export function TransactionsRecent() {
  const data = getRecentTransactions();

  return <TransactionsList title="Transações recentes" items={data} seeAll />;
}
