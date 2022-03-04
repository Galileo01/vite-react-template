import * as React from 'react'

import logo from '@/logo.svg'
import './index.less'

import Test from '@/components/test'

const Index = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className="Index">
      <header className="Index-header">
        <img src={logo} className="Index-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((preCount) => preCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <Test tag="=" />
        <p>
          Edit <code>Index.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="Index-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="Index-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default Index
