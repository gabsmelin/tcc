import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;

    .titulo {
        font-size: 220%;
        font-weight: bolder;
        margin-bottom: 4%;
        margin-left: 10%;
    }

    button {
        border: 3px solid #FFB800;
        background-color: #424242;
        color: #fff;
        height: 43px;
        width: 44px;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0px 5px;
        font-size: 14px;
        font-family: Montserrat;
    }

    .filmes {
        background-color: #3b3b3b;
        margin: 0px 10%;
        padding: 2.5%;
        box-shadow:  0px  1px 10px #c2c2c2;
    }

    .dif {
        display: none;
    }

    @media (max-width: 800px) {
        text-align: center;

        .titulo {
            margin: 70px 0px 50px 0px;
            font-size: 150%;
        }

        .filmes {
            margin: 0% 5%;
        }
    }
`;


export { Container }