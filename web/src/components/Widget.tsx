import { ChatTeardropDots } from "phosphor-react";
import { useState} from 'react';
import { Popover } from '@headlessui/react' 
import { WidgetForm } from "./WidgetForm";
// Popover descarta o uso do Widgetopen e setar estado. 


export function Widget(){
    return (
      <Popover className="absolute bottom-4 right-4 md:botton-8 md:right-8 flex flex-col items-end">
        <Popover.Panel> <WidgetForm/>  </Popover.Panel> 

        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group"> 
            <h1> <ChatTeardropDots className="w-6 h-6"/> </h1>
            
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-800 ease-linear">
                <span className="pl-3">  </span>
                Feedback
            </span>
        </Popover.Button>
      </Popover>
    )
}
