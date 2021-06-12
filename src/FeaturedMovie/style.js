import React from 'react';
import styled from 'styled-components';


export const Container = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
`;

export const ContentEfectBacdrop = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const ContentEfectBacdropEsquerda = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
`;