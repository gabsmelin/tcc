import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Montserrat;
    margin: 16px 150px 0px 150px;
    color: #fff;
    justify-content: space-between;
    align-items: center;

    .logo {
        font-family: Montserrat;
        font-size: 1em;
        font-weight: bolder;
        line-height: 1em;
        width: 100px;
    }
    
    .parte2 {
        display: flex;
        flex-direction: row;
        font-size: .9em;
        align-items: center;
    }

    .usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 80px;
    }

    .foto img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }

    .tr { font-weight: bolder; }

    .sair {
        margin: 0px 80px;
        font-weight: bold;
    }

    input {
        background-color: #D0D0D0;
        border-radius: 20px;
        height: 2em;
        width: 13em;
    }

`;


export { Container }