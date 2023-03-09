import { GithubIcon, LinkedInIcon } from "../components/common-icons";
import { ProfilePicture } from "../components/profile-picture";
import { StyledProfile } from "../components/profile.styled";
import { LayoutWithBottonNavigation } from "../layouts/with-bottom-navigation";

export function Profile() {
  return (
    <LayoutWithBottonNavigation>
      <StyledProfile>
        <ProfilePicture file="/static/tati.jpeg" />
        <h4>Olá, me chamo Tatiane e sou desenvolvedora Front-end</h4>
        <div>
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
