import {
  StyledTransactionsRecent,
  StyledTransactionsRecentTitle,
} from "./transactions-recent.styled";
import { StyledTransactionsRecentsCard } from "./common-card.styled";
import { CommonCard, TransactionType } from "./common-card";

export type TrasactionPropsType = {
  items: TransactionType[];
  title: string;
  seeAll: boolean;
};

export function TransactionsList({
  items,
  title,
  seeAll,
}: TrasactionPropsType): JSX.Element {
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
          <a className="seeAll" href="/relatorios">
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
