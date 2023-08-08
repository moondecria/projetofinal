import { styled } from "styled-components";
import LoginForm from "../components/LoginForm";

const Container = styled.div`
    background-color: pink;
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    &::after {
        content: " ";
        background-color: purple;
        width: 90%;
        height: 100%;
        position: absolute;
        right: 0;
        z-index: 1;
        transform: skew(15deg) translateX(50%);
        box-shadow: -2px -2px 5px #000000;
    }

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>
    <Container>
        <LoginForm />
    </Container>
</>