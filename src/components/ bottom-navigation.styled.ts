import styled from "styled-components";

export const StyledBottomNavigationContainer = styled.div`
    background-color: white;
    padding-top: 22px;
    padding-bottom: 22px;
    box-shadow: 0px -2px 30px rgba(0, 0, 0, 0.07);

    & path {
        transition:  all 0.2s ease-in-out;
    }

    & a.active path, & a:hover path {
        fill: ${({ theme }) => theme.colors.primary}
    }
`