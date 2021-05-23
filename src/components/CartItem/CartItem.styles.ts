import styled from 'styled-components';

export const Wrapper = styled.div`
 display: flex;
 justify-content: space-between;
 font-family: Poppins, sans-serif;
 border-bottom: 1px solid lightblue;
 padding-bottom: 20px;

    div{
        flex: 1;
    }

    .information, 
    .buttons {
        display: flex;
        justify-content: space-between;
    }
    
      .buttonsAdd:hover{
        background-color: rgba(3, 252, 53, 0.5);
    } 

    .buttonsRem:hover{
        background-color: rgba(255, 0, 21, 0.5);
    }

    img{
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
    }

` 