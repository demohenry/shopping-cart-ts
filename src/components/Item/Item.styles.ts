import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
background: #FFF;
width: max(100%, 360px);
border: 1px solid lightblue;
border-radius: 20px;
height: 100%;

    button {
        border-radius: 0 0 20px 20px;
    }
    button:hover {
        background: green;
        font-weight: bold;
    }

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Poppins, sans-serif;
        padding: 1rem;
        height: 100%;
    }

`