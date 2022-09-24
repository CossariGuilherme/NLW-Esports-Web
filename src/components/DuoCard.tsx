import { GameController } from 'phosphor-react';
import { DuoInfo } from '../components/DuoInfo'

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
}

export function DuoCard({ data, onConnect }: Props) {
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

        <button
        className="bg-violet-500 px-9 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600" type="submit"
        onClick={onConnect}
        >
        <GameController size={24}/>
            Conectar
        </button>
    </div>
  );
}