import styled from "styled-components";

export const Container= styled.div`
background-color: #e0ecdc;
width: 100%;
padding: 70px;
    img{
        width: 20%;
    }
    form{
        border-bottom: 1px solid ;
        margin: 20px 0;
        input{
            width: 80%;
            height: 50px;
            border: none;
            outline: none;
            background-color: transparent;
            padding-left: 30px;
            &::placeholder{
                font-size: 15px;
                font-style: italic;
                color: #1b745e !important;
            }
        }
        button{
            background-color: #d8e3d5 !important;
            padding: 15px 30px;
            border: none;
            color: #0c5b47;
        }
    }
    .col-12{
        width: 500px;
    }
    h4{
        color: #0c5b47 !important;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 20px;
    }
    ul{
        padding: 0;
    }
    li{
        margin-top: 10px;
    }
    a{
        color: #0c5b47;
        font-style: italic;
        font-weight: 500;
        &:hover{
            border-bottom: 1px solid black;
            transition: .3s ease;
        }
    }
`
