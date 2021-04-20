import { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Episodes from './pages/Episodes'
import Library from './pages/Library'

interface RouterProps {
  children: ReactElement | ReactElement[]
}

export default function Router({ children }: RouterProps) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
