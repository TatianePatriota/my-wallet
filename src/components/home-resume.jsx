import { moneyFormatter } from "../formatters/number-formatter";
import { getBalance } from "../services/transactions-service";
import { Avatar } from "./common-avatar";
import { Box } from "./common-box";
import { NotificationIcon } from "./common-icons";
import {
  StyledHomeResumeHeader,
  StyledHomeResumeHeaderTitle,
  StyledHomeRsumeBalance,
} from "./home-resume.styled";

export function HomeResume() {
  return (
    <div>
      <HomeResumeHeader />
      <HomeResumeBalance />
    </div>
  );
}

function HomeResumeBalance() {
  const balance = getBalance();
  return (
    <StyledHomeRsumeBalance>
      <h2>Balanço</h2>
      <h1>{moneyFormatter(balance)}</h1>
    </StyledHomeRsumeBalance>
  );
}

function HomeResumeHeader() {
  return (
    <StyledHomeResumeHeader>
      <Box justify="space-between">
        <StyledHomeResumeHeaderTitle>
          Bem vindo de volta, <br />
          <strong>Tatiane Alvarenga</strong>
        </StyledHomeResumeHeaderTitle>
        <NotificationIcon />
        <Avatar file="/static/avatar.png" />
      </Box>
    </StyledHomeResumeHeader>
  );
}
