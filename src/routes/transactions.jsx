import { TransactionsList } from "../components/transactions-list";
import { getAllTransactions } from "../services/transactions-service";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";

export function Transactions() {
  const data = getAllTransactions();

  return (
    <LayoutWithBottonNavigation>
      <TransactionsList title="Todas as transações" items={data} />
    </LayoutWithBottonNavigation>
  );
}
