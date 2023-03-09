import styled from "styled-components";

const StyledProfilePicture = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${({ theme, file }) =>
    file ? `url(${file})` : theme.colors.backgroundDark};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export function ProfilePicture({ file }) {
  return <StyledProfilePicture file={file} />;
}
