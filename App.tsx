import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Bot } from 'lucide-react'
import ChatModal from './components/ChatModal'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 pb-20 pt-6">
        <Outlet />
      </main>

      <div className="fixed bottom-4 left-4 z-50">
        <button
          type="button"
          aria-label="المساعد الذكي"
          className="px-4 h-12 rounded-full bg-brand-500 text-white shadow-lg border border-white/20 inline-flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform"
          onClick={() => setChatOpen(true)}
        >
          <Bot className="size-5" />
          <span className="hidden sm:inline">المساعد</span>
        </button>
      </div>
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  )
}
