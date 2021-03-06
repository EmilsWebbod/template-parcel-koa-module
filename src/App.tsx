import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api', {
      mode: 'cors',
      credentials: 'include'
    }).then(async response => {
      console.log(response);
      const data = await response.text();
      alert('FETCH OK: ' + data);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Parcel + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React asd
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
