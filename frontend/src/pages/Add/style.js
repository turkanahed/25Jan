import styled from "styled-components";

export const AddContainer = styled.div`
    text-align: center;
    width: 100%;
    height: calc(100vh - 100px);
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        margin-bottom: 80px;
        font-size: 60px;
        color: #1b745e;
    }
    form{
        input{
            width: 600px;
            height: 70px;
            margin-bottom: 10px;
            border-radius: 5px;
            border: 2px solid #EEEEEE;
            outline: none;
            padding-left: 10px;
        }
    }
    button{
        background-color:#1b745e;
        color: white;
        font-size: 20px;
        border: none;
        border-radius: 2rem;
        padding: 20px 100px;
        letter-spacing: 1px;
        margin-top: 30px;
    }
`