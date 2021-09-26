import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;



    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 2em;
        margin-left: 140px;
    }


    .prox-pag {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        margin-top: 4.5em;
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
`;


const Bloco1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 200px;
    justify-content: space-between;
    text-align: center;

    .nome {
        font-size: 17px;
        width: 100px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        margin-left: 10px;
    }

    img {
        width: 115px;
        height: 170px;
    }
    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 140px 00px 200px;
    justify-content: space-between;
    

    .nome {
        margin-left: 10px;
        font-size: 17px;
        width: 100px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 115px;
        height: 170px;
    }


    
`;




export { Container, Bloco1, Bloco2 }