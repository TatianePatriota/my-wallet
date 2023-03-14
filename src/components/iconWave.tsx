import styled from "styled-components";

type IconFileProps = {
  file: string;
};

export function IconWave({ file }: IconFileProps): JSX.Element {
  return <StyledIconWave file={file} />;
}

const StyledIconWave = styled.div<{ file: string }>`
  background-size: contain;
  background-repeat: repeat;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;

  background: ${({ theme, file }) =>
    file ? `url(${file})` : theme.colors.primary};
`;
