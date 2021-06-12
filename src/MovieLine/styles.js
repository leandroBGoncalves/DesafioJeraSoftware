import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 2rem;

    h2 {
        margin: 0 0 0 2rem;
    }
`;

export const ContentListas = styled.div`
    overflow-x: hidden;
    padding-left: 2rem;
`;

export const ContentListMovies = styled.div`
    width: 9999999999px;
`;

export const ContentMovie = styled.div`
    display: inline-block;
    width: 10rem;
    cursor: pointer;
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s ;
     
        &:hover {
            transform: scale(1);
        }
    }
`;