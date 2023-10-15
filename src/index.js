import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './scss/app.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <Router>
            <App />
            {/* <Route path="*" element={<PageError />} /> */}
        </Router>
    </Provider>,
);

