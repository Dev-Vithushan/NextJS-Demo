import styles from './Login.module.css'

export default function dashboard() {
    return (
      <div>
          <nav className="flex justify-center space-x-8">
            <a href="/dashboard" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Home</a>
            <a href="/team" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Team</a>
            <a href="/projects" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Projects</a>
            <a href="/reports" className="px-3 py-2 font-medium rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900">Reports</a>
          </nav>
      </div>
      
    )
  }