import App from './App';
import { createRoot } from 'react-dom/client';


let domNode = document.getElementById('root');

if (!domNode) {
    domNode = document.createElement('div');
    domNode.id = 'root';
    document.body.appendChild(domNode);
}

const root = createRoot(domNode);
root.render(<App />);