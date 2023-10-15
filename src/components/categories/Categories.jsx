import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { categoriesFetched, categoriesFetching, categoriesFetchedError, setActiveCategory } from '../../redux/actions';
import useHttp from '../../hooks/http.hook';

const Categories = ({ items }) => {
    const [activeItem, setActiveItem] = useState(null);
    // eslint-disable-next-line no-shadow
    const { loadingStatus, activeCategory, categories } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(categoriesFetching());
        setTimeout(() => {
            request('http://localhost:3000/category.json').then((data) => dispatch(categoriesFetched(data.categories)))
                .catch(() => categoriesFetchedError());
        }, 4000);
    }, []);

    const skeleton = () => {
        return <Skeleton className='skelet' variant="rectangular" width={130} height={45}></Skeleton>;
    };

    const skeletons = (num) => {
        const arr = [];
        for (let index = 0; index < num; index++) {
            arr.push(skeleton());
        }
        return arr;
    };

    if (loadingStatus === 'loading') {
        return (
            <div className="categories">
                <ul>
                    {skeletons(4)}
                </ul>
            </div>
        );
    } if (loadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
    }

    const renderCategories = (arr) => {
        return arr.map((cat) => { // обязателен return
            return (
                <li className={(activeCategory === cat.name ? 'active' : '')} key={cat.id} onClick = {() => dispatch(setActiveCategory(cat.name))}>{cat.name}</li>
            );
        });
    };



    const elements = () => (renderCategories(categories));

    return (
        <div className="categories">
            <ul>
                {categories.length === 0 ? skeletons(4) : elements()}
                {/* <li className={(activeItem === null) ? 'active' : ''} onClick = {() => setActiveItem(null)}>Все</li>
                {items && items.map((item, index) => <li className={(activeItem === item) ? 'active' : ''} // items && -проверка на существование items
                    onClick={() => setActiveItem(item)} key = {`${item}_${index}`}>{item}</li>)} */}
            </ul>
        </div>
    );
};

export default Categories;
