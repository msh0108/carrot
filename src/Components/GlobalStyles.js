import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    ul, li {
        list-style:none;
    }
    input:focus {
        outline:none;
    }
    fieldset {
        border: none;
    }
    button {
        background-color:#f04124;
    }
`;
export default GlobalStyles;
