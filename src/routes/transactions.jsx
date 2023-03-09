import { TransactionsList } from "../components/transactions-list";
import { getAllTransactions } from "../services/transactions-service";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";
import { StyledHeaderTransactions } from "../components/header-transactions.styled";
import { HeaderTransactions } from "../components/header-transactions";

export function Transactions() {
  const data = getAllTransactions();

  return (
    <LayoutWithBottonNavigation>
      <StyledHeaderTransactions>
        <HeaderTransactions
          title=" Entradas e Saídas"
          description="Balanço total"
        />
      </StyledHeaderTransactions>
      <TransactionsList title="Todas as transações" items={data} />
    </LayoutWithBottonNavigation>
  );
}
