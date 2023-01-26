import { StyledTransactionsRecentTitle } from "./transactions-recent.styled";
import {
  StyledCard,
  StyledTransactionsRecentsCard,
} from "./common-card.styled";
import { Box } from "./common-box";
import { CommonCard } from "./common-card";

export function TransactionsRecent() {
  return (
    <Box>
      <StyledCard>
        <StyledTransactionsRecentTitle>
          <h4>Transações recentes</h4>
          <h5>Ver tudo</h5>
        </StyledTransactionsRecentTitle>
        <StyledTransactionsRecentsCard>
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </StyledTransactionsRecentsCard>
      </StyledCard>
    </Box>
  );
}
