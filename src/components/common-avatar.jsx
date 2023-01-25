import styled from "styled-components";

const StyledAvatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 6px;
  background: ${({ theme, file }) =>
    file ? `url(${file})` : theme.colors.backgroundDark};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export function Avatar({ file }) {
  return <StyledAvatar file={file} />;
}
