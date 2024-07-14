'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState ,useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import  { supabase }  from '@/lib/supabase';

interface ContextProps {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  appData: any
  setAppData: Dispatch<SetStateAction<any>>
  supabaseClient: any
  setSupabaseClient: Dispatch<SetStateAction<any>>
  settsion: any
  setSession: Dispatch<SetStateAction<any>>
}

const AppContext = createContext<ContextProps>({
  loading: false,
  setLoading: (): boolean => false,
  appData: {},
  setAppData: (): any => {},
  supabaseClient: null,
  setSupabaseClient: (): any => {},
  session: null,
  setSession: (): any => {},
})

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [appData, setAppData] = useState<any>({supabaseUrl:null,supabaseKey:null})
  const [supabaseClient, setSupabaseClient] = useState<any>(null)
  const [session, setSession] = useState<any>(null)
  useEffect(() => {
      const getSupabase = async () => {
          const [supabaseUrl, supabaseKey] = await invoke('get_supabase_config')
          setSupabaseClient(await supabase(supabaseUrl, supabaseKey))

          setAppData({supabaseUrl,supabaseKey})
      }
      getSupabase()
  }, [])

  return (
    <AppContext.Provider
      value={{ loading, setLoading, appData, setAppData, supabaseClient, setSupabaseClient,setSession,session}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppProvider = () => useContext(AppContext)
