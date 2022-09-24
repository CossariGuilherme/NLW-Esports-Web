import { useState, useEffect, FormEvent } from 'react';
import { CheckCircle } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

interface Game {
    discord: string;
  }
  

export function DuoMatch(props: Game){
    return (
        <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed center"/>
        <Dialog.Content className="fixed bg-[#2A2634] py-9 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 ">
          <CheckCircle
          size={64}
          color= "#34D399"
          weight="bold"
          style={{width: '100% ',margin: 'center'}}
          />
          <Dialog.Title className="text-3xl font-black text-center m-3">Let’s play!</Dialog.Title>
          <Dialog.Title className="text-center m-3">Agora é só começar a jogar!</Dialog.Title>
          <Dialog.Title className="text-center m-3">Adicione no Discord</Dialog.Title>
          <div className='h-9 my-3 bg-slate-900 text-center rounded-sm '>
          <button className='text-center m-1'>{props.discord}</button>
          </div>
            
        </Dialog.Content>
      </Dialog.Portal>
    )
}