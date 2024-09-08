import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
}

h1{
    font-size: 3em;
    font-weight: 800;
}

h2{
    font-size: 2.5em;
    font-weight: 600;
}

h3{
    font-size: 2em;
    font-weight: 500;
}

h4{
    font-size: 1.25em;
    font-weight: 400;
}

p{
    font-size: 1em;
    font-weight: 400;
}

a{
    text-decoration: none;
    color: #000;
}

button{
    border: none;
    background-color: transparent;
}

#root{
    font-family: "Roboto", system-ui;
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
    gap: 30px;
}

header{
    height: 50px;
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`