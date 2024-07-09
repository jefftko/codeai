import React from 'react'
import PanelHeader from '@/components/organisms/panel-header'
import PanelOutput from '@/components/organisms/panel-output'
import PanelSettings from '@/components/organisms/panel-settings'

export default function Page() {
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

