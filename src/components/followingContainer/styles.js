import styled from 'styled-components';

export const Section = styled.section`
    width: 400px;
    height: 400px;
    background: rgba(255,255,255,.95);
    border-radius: 10px;
    border-bottom: 10px solid purple;
    margin-top: 15px;
    
    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfFollowingContainer = styled.h1`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
`

export const Followi = styled.h2`
    position: relative;
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
        text-align: center;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #000;
        margin-top: -5px;
    }

`