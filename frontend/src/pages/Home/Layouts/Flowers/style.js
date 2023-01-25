import styled from "styled-components";

export const FlowersContainer = styled.div`
/* text-align: center; */
background-image: url("https://mobirise.com/extensions/floram4/floral-studio/assets/images/background1-1-1085x595.jpg");
h3{
    text-align: center;
    padding-top: 50px;
    font-weight: 500;
    font-size: 16px;
    font-style: italic;
    color: #1b745e;
}
h4{
    text-align: center;
    font-size: 50px;
    line-height: 1;
    font-weight: 400;
    color: #0c5b47;
    margin-bottom: 10px;
}
.container{
    margin: 30px auto auto;
    width: 98%;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.filter{
    display: inline;
    position: relative;
    top: 100px;
    left: 150px;
    font-size: 20px;
    font-weight: 500;
    color: #1b745e;
    cursor: pointer;
}
form{
    position: relative;
    left: 150px;
    top: -40px;
    margin-top: 50px;
    input{
        width: 350px;
        height: 50px;
        padding: 20px;
        border: none;
        outline: none;
    }
    span{
        position: relative;
        right: 30px;
        font-size: 20px;
    }
}
`