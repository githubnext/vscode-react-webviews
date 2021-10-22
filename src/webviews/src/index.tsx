import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import View1 from './View1'
import View2 from './View2'
import './lib/vscode.css'
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'

// TODO: Type the incoming config data
let config: any = {}
let workspace = ''

const root = document.getElementById('root')

if (root) {
  workspace = root.getAttribute('data-workspace') || ''
}

window.addEventListener('message', e => {
  // Here's where you'd do stuff with the message
  // Maybe stick it into state management or something?
  const message = e.data
  console.debug(message)
})

const rootEl = document.getElementById('root')

function AppRoutes() {
  let location = useLocation()
  let navigate = useNavigate()
  useEffect(() => {
    navigate(`/${rootEl.dataset.route}`, { replace: true })
  }, [])

  return (
    <Routes>
      <Route path="view1" element={<View1 />} />
      <Route path="view2" element={<View2 />} />
    </Routes>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router initialEntries={[rootEl.dataset.route]} initialIndex={0}>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
  rootEl
)
