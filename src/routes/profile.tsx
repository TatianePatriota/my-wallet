import { GithubIcon, LinkedInIcon } from "../components/common-icons";
import { ProfilePicture } from "../components/profile-picture";
import { StyledProfile } from "../components/profile.styled";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";

export function Profile(): JSX.Element {
  return (
    <LayoutWithBottonNavigation>
      <StyledProfile>
        <div>
          <ProfilePicture file="/static/tati.jpeg" />
          <h3>Tatiane Alvarenga</h3>
          <h4>Desenvolvedora Front-end</h4>
        </div>
        <div>
          <p>Minhas redes:</p>
          <a href="https://www.linkedin.com/in/tatianepatriota/">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/TatianePatriota">
            <GithubIcon />
          </a>
        </div>
      </StyledProfile>
    </LayoutWithBottonNavigation>
  );
}
