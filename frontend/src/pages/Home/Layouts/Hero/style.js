import styled from "styled-components"

export const HeroContainer = styled.div`
height: 70vh;
#prev{
    position: absolute;
    top: 50%;
    z-index: 1000;
    left: 20px;
    font-size: 16px;
    letter-spacing: 1px;
    color: rgb(27, 116, 94,0.8);
    font-style: italic;
    cursor: pointer;
    span{
       position: absolute;
       top: 20px;
       width: 70px;
       height: 0;
       border: 1px solid rgb(27, 116, 94,0.8);
       background-color: rgb(27, 116, 94, 0.8);
    }
}
#next{
    position: absolute;
    top: 50%;
    z-index: 1000;
    right: 20px;
    font-size: 16px;
    letter-spacing: 1px;
    color: rgb(27, 116, 94,0.8);
    font-style: italic;
    cursor: pointer;
    span{
        right: 1px;
       position: absolute;
       top: 20px;
       width: 70px;
       height: 0;
       border: 1px solid rgb(27, 116, 94,0.8);
       background-color: rgb(27, 116, 94, 0.8);
    }
}
.swiper-content{
    position: absolute;
    color: #1b745e;
   h4{
    font-style: italic;
    font-weight: 500;
    font-size: 17px;
    line-height: 1.5;
   }
   h5{
    font-size: 45px;
    line-height: 1.5;
    font-weight: 400;
   }
}

`