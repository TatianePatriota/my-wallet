import { moneyFormatter } from "../formatters/number-formatter";
import { getBalance } from "../services/transactions-service";
import { Avatar } from "./common-avatar";
import { Box } from "./common-box";
import { HomeBalanceIcon, HomeBalanceIconEllipse } from "./common-icons";
import {
  StyledHomeResumeHeader,
  StyledHomeResumeHeaderTitle,
  StyledHomeResumeIcon,
  StyledHomeResumeIconEllipse,
  StyledHomeResumeBalance,
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
    <StyledHomeResumeBalance>
      <h2>Balanço</h2>
      <h1>{moneyFormatter(balance)}</h1>
      <StyledHomeResumeIconEllipse>
        <HomeBalanceIconEllipse />
      </StyledHomeResumeIconEllipse>
      <StyledHomeResumeIcon>
        <HomeBalanceIcon />
      </StyledHomeResumeIcon>
    </StyledHomeResumeBalance>
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
        <Avatar file="/static/avatar.png" />
      </Box>
    </StyledHomeResumeHeader>
  );
}
