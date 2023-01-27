import {
  StyledTransactionsRecent,
  StyledTransactionsRecentTitle,
} from "./transactions-recent.styled";
import { StyledTransactionsRecentsCard } from "./common-card.styled";
import { CommonCard } from "./common-card";

export function TransactionsList({ items, title, seeAll }) {
  if (!items || !items.length) {
    return (
      <StyledTransactionsRecent>
        <StyledTransactionsRecentTitle>
          <h4>Nada pra ver.</h4>
        </StyledTransactionsRecentTitle>
      </StyledTransactionsRecent>
    );
  }

  return (
    <StyledTransactionsRecent>
      <StyledTransactionsRecentTitle>
        <h4>{title}</h4>
        {seeAll && (
          <a className="seeAll" href="/todas-as-transacoes">
            Veja tudo
          </a>
        )}
      </StyledTransactionsRecentTitle>
      <StyledTransactionsRecentsCard>
        {items.map((t) => (
          <CommonCard key={t.id} transaction={t} />
        ))}
      </StyledTransactionsRecentsCard>
    </StyledTransactionsRecent>
  );
}
