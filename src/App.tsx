import Viewer from 'pages/Viewer'
import { Provider } from 'react-redux'
import './App.css'
import store from './app/store'

function App() {
  return (
    <Provider store={store}>
      <Viewer />
    </Provider>
  )
}

export default App
