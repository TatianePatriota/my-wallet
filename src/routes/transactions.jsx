import { TransactionsList } from "../components/transactions-list";
import { getAllTransactions } from "../services/transactions-service";
import { LayoutWithoutBottomNavigation } from "../layouts/without-bottom-navigation";

export function Transactions() {
  const data = getAllTransactions();

  return (
    <LayoutWithoutBottomNavigation>
      <TransactionsList title="Todas as transações" items={data} />
    </LayoutWithoutBottomNavigation>
  );
}
