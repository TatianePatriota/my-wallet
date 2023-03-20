import { TransactionsList } from "../components/transactions-list";
import {
  getAllTransactions,
  getBalance,
} from "../services/transactions-service";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";
import { StyledHeaderTransactions } from "../components/header-transactions.styled";
import { HeaderTransactions } from "../components/header-transactions";
import { IconWave } from "../components/iconWave";
import { moneyFormatter } from "../formatters/number-formatter";

export function Transactions(): JSX.Element {
  const data = getAllTransactions();
  const balance = getBalance();

  return (
    <LayoutWithBottonNavigation>
      <StyledHeaderTransactions>
        <HeaderTransactions
          title=" Entradas e Saídas"
          description="Balanço total"
          balanceSheet={moneyFormatter(balance)}
        />
        <IconWave file="/static/iconwave.png" />
      </StyledHeaderTransactions>
      <TransactionsList title="Todas as transações" items={data} />
    </LayoutWithBottonNavigation>
  );
}
