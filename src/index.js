import { createRoot } from 'react-dom/client';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './index.css';
import App from './App';


const container = document.getElementById('result')
const root = createRoot(container)
root.render(<App tab="home" />)
