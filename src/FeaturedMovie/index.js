import React from 'react';
import { Container, ContentEfectBacdrop, ContentEfectBacdropEsquerda } from './style';


export function FeaturedMovie ({item}) {

    let firstDate = new Date(item.first_air_date);

    return (
       <Container style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
       }}>
           <ContentEfectBacdrop>
               <ContentEfectBacdropEsquerda>
               <div>{ item.title }</div>
               <div>
                   <div>{item.vote_average}</div>
                   <div>{firstDate.getFullYear()}</div>
               </div>
               <div>{item.overview}</div>
               <div>buttons</div>
               <div>Generos:</div>
               </ContentEfectBacdropEsquerda>
           </ContentEfectBacdrop>
       </Container>
    );
};