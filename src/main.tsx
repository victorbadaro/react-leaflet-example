import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';

import 'leaflet/dist/leaflet.css';
import './index.css';

const container = document.getElementById('root');

createRoot(container!).render(<App />);
