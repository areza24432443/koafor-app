
"use client"
import { createContext } from 'react';

type BiberContextProps = {
    // Define any state or functions you want to provide here
    children: React.ReactNode
}




const BiberContext = createContext({});


 export function BiberContextProvider({ children }: BiberContextProps) {
  return (
    <BiberContext.Provider value={{}}>
        {children}
    </BiberContext.Provider>
  )
}

