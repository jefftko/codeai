'use client'
import React from 'react'
import PanelHeader from '@/components/organisms/panel-header'
import PanelOutput from '@/components/organisms/panel-output'
import PanelSettings from '@/components/organisms/panel-settings'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/navigation'
import  { supabase }  from '@/lib/supabase';
import { useAppProvider } from '@/app/app-provider';

export default function Page() {
    const router = useRouter()
    const { appData,session,setSession} = useAppProvider();

    useEffect(() => {

   const checkSession = async (supabaseUrl, supabaseKey) => {
       if(!supabaseUrl || !supabaseKey) {
           return
       }
       const supabaseClient = await supabase(supabaseUrl, supabaseKey);
       const {data, error} = await supabaseClient.auth.getSession();
       const serverSession = data.session;
       console.log(serverSession)
        if(!serverSession && router.pathname !== '/login' && router.pathname !== '/signup') {
            console.log('no session')
            router.push('/login');
            }else{
                setSession(data.session)
                console.log('session')
            }
   }
   const { supabaseUrl, supabaseKey } = appData;
   // check if session is null
   if (!session){
       console.log('no session')
       checkSession(supabaseUrl, supabaseKey)
   }
   console.log(session)

    }, [appData])

    
       
  return (
      <>
      <PanelHeader />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <PanelSettings />
        <PanelOutput />
        </main>
      </>
  )
}

