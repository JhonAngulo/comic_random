import React from 'react'
import { render } from 'react-dom'

import './styles/global.scss'
import '../public/favicon.ico'

import App from '@containers/App'

render(<App />, document.getElementById('app'))
