import styled from "styled-components";

export const TeamContainer=styled.div`
background-color: white;
text-align: center;
padding: 50px;
        h3{
            padding-top: 50px;
            font-weight: 500;
            font-size: 16px;
            font-style: italic;
            color: #1b745e;
        }
        h4{
            font-size: 50px;
            line-height: 1;
            font-weight: 400;
            color: #0c5b47;
        }
        .card-wrapper{
            margin: 100px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            .img-wrapper{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            h5{
                margin-top: 20px;
                font-weight: 500;
                font-size: 20px;
                color: #1b745e;
            }
            h6{
                font-size: 18px;
                line-height: 1;
                font-weight: 300;
                color: #0c5b47;
                padding: 10px 0;
                font-style: italic;
            }
        }
`