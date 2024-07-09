'use client'
import { useEffect, useState } from 'react'
import Sidebar from '@/components/organisms/sidebar'

export default function PageLayout({ children }: { children: React.ReactNode }) {

  return (
     <div className="grid h-screen w-full pl-[56px]">
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <Sidebar />
            </aside>
      <div className="flex flex-col">
        {children} 
      </div>
    </div>
  )
}
