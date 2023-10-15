
import { Categories, SortPopup, PizzaBlock, ErrorBoundary } from '../components';


const Home = ({ items }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup items={[
                    'популярности',
                    'цене',
                    'алфавиту',
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/* ...obj нужен для того чтобы не прописывать все пропсы */}
                {items.map((obj) => <PizzaBlock key = {obj.id} {...obj}/>)}
            </div>
        </div>
    );
};

export default Home;
