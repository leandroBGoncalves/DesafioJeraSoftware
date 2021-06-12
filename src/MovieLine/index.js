import React from 'react';
import { Container, ContentListas, ContentListMovies, ContentMovie } from './styles';

export function LinhaDeFilmes({title, items}) {
    return (
        <Container>
            <h2>{title}</h2>
            <ContentListas>
                <ContentListMovies>
                {items.results.length > 0 && items.results.map((item, key) => (
      
                    <ContentMovie key={key}>
                      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </ContentMovie>
                ))}
                </ContentListMovies>
           </ContentListas>
        </Container>
    )
}