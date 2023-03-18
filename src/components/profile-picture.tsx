import styled from "styled-components";

const StyledProfilePicture = styled.div<{ file: string }>`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${({ theme, file }) =>
    file ? `url(${file})` : theme.colors.backgroundDark};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

type FileProps = {
  file: string;
};

export function ProfilePicture({ file }: FileProps): JSX.Element {
  return <StyledProfilePicture file={file} />;
}
