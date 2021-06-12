import React, { useEffect, useState } from 'react';
import { FeaturedMovie } from './FeaturedMovie';
import { GlobalStyle } from './global';
import { LinhaDeFilmes } from './MovieLine';
import Tmdb from './Tmdb';




export function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
    
    useEffect(() => {
      const loadAll = async () => {
        //pegando lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list);

        //Pegando os destaques
        let featured = list.filter(i=>i.slug === 'action');
        let randonChosen = Math.floor(Math.random() * (featured[0].items.results.length - 1));
        let chosen = featured[0].items.results[randonChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
       setFeaturedData(chosenInfo);

       console.log(chosenInfo);
      }

      loadAll();
    }, []);

    return (
      <>
      {featuredData &&
        <FeaturedMovie item={featuredData} />
        }
      <section>
          {movieList.map((item, key) =>(
             <LinhaDeFilmes key={key} title={item.title} items={item.items}/>
          ))}
  
      </section>

      <GlobalStyle />
      </>
      );
}