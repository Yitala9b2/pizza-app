import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from './components';
import { Home, Cart } from './pages';


const App = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setPizzas(data.pizzas);
        });
        // fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((resp) => console.log(resp));
        // fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((resp) => {
        //    setPizzas(resp.pizzas);
        // });
    }, []);
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route data exact path="/" element={<Home items={pizzas} />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;