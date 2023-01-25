import { Avatar } from "./common-avatar";
import { Box } from "./common-box";
import {
  StyledHomeResumeHeader,
  StyledHomeResumeHeaderTitle,
} from "./home-resume.styled";

export function HomeResume() {
  return (
    <div>
      <HomeResumeHeader />
    </div>
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
