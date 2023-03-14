import styled from "styled-components";

const StyledAvatar = styled.div<{ file: string }>`
  height: 40px;
  width: 40px;
  border-radius: 6px;
  background: ${({ theme, file }) =>
    file ? `url(${file})` : theme.colors.backgroundDark};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 20px;
`;

type AvatarFileProps = {
  file: string;
};

export function Avatar({ file }: AvatarFileProps): JSX.Element {
  return <StyledAvatar file={file} />;
}
