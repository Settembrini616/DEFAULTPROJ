import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./store/store";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import './assets/styles/main.scss';



import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
<Provider store={store}>
<App />
</Provider>
</StrictMode>


);
