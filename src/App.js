import React, { useEffect } from 'react';
import Tmdb from './services/Tmdb';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      Olá Mundo!
    </div>
  )
}