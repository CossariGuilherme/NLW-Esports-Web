import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import { DuoInfo } from '../components/DuoInfo'

import * as Dialog from '@radix-ui/react-dialog';
import { DuoMatch } from './DuoMatch';
export interface DuoCardProps{
    id: string,
    hourStart: string,
    hourEnd: string,   
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}

interface Props {
    data: DuoCardProps,
    onConnect: () => void,
    discord: string,
}

export function DuoCard({ data, onConnect, discord }: Props) {

  return (
    <div className="grid grid-cols-1 gap-5 bg-[#2A2634] w-[250px] p-7 text-white shadow-lg shadow-black/25 items-center rounded-md">
        <DuoInfo
        label='Nome'
        value={data.name}
        />
        <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />
        <DuoInfo
        label='Chamada de áudio'
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? "#34D399" : "#F87171"}
        /> 

      <Dialog.Root>
        <Dialog.Trigger className="py-3 px-4 justify-center bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3" onClick={onConnect} >
          <DuoMatch discord={discord} />
          <GameController size={24}/>
          Conectar
        </Dialog.Trigger>
      </Dialog.Root>
    </div>
  );
}