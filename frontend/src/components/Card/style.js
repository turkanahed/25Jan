import styled from "styled-components";

export const CardContainer = styled.div`
    .MyCard{
        border-radius: 5px;
        width: 350px;
        /* height: 380px; */
        display: inline-block;
        margin: 40px 20px;
        text-align: center;
        .card-img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        text-align: center;
        padding-bottom: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .card-desc{
        padding: 20px;
        text-align: center;
        h2{
            color: #1b745e;
            font-size: 30px;
            font-weight: 400;
            line-height: 1.1;
        }
        p{
            margin: 0;
            font-size: 20px;
            color: #1b745e;
        }
    }
    button{
        background-color: rgb(165, 7, 7);
        color: white;
        font-size: 15px;
        border: none;
        border-radius: 2rem;
        padding: 10px 40px;
        letter-spacing: 1px;
    }
}
`