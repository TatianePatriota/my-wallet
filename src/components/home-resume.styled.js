import styled from "styled-components";

export const StyledHomeResumeHeader = styled.div`
    margin-top: ${({ theme }) => theme.gutter.default/2}px;
    margin-bottom: ${({ theme }) => theme.gutter.default * 2}px;
`

export const StyledHomeResumeHeaderTitle = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.size.small}px;
    line-height: 1.4;
    
    & strong {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.font.size.default}px;
    }
`