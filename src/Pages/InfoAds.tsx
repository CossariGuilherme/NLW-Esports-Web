import { useState, useEffect } from 'react';

import logoImg from '../assets/logo-nlw-esports.svg';

import { DuoCard, DuoCardProps } from '../components/DuoCard';

interface Game {
  id: string;
  title: string;
  banner: string;
  _count: {
    ads: number;
  }
}

function InfoAds() {
    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [game, setGame] = useState<Game>();
    const [discordDuoSelected, setDiscordDuoSelected] = useState('');
    
    const urlParams = window.location.pathname;
    var GameId = urlParams.substring(9, 45);

    async function getDiscordUser(adsId: string) {
        fetch(`http://localhost:3333/ads/${adsId}/discord`)
        .then(response => response.json())
        .then(data => setDiscordDuoSelected(data.discord))
         }

  useEffect(() => {
    fetch(`http://localhost:3333/game/${GameId}`)
    .then(response => response.json())
    .then(data => setGame(data))
  }, []);
    
  
  useEffect(() => {
    fetch(`http://localhost:3333/games/${GameId}/ads`)
    .then(response => response.json())
    .then(data => setDuos(data))
  }, []);


  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} style={{width: 200, marginBottom: 40}} alt="" />

      <img src={game?.banner} style={{width: 700, height: 250, objectFit: 'fill' }} alt="" />


    <div className="grid grid-cols-4 gap-6 mt-16">
      {duos.map(duos => {
        return(
            <DuoCard key={duos.id} discord={discordDuoSelected} data={duos} onConnect={() =>getDiscordUser(duos.id)}/>
        )
      })}
    </div>
    </div>
    )
}

export default InfoAds
