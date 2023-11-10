import { useState, useEffect } from 'react';
import Axios from 'axios';
import { unsetUser } from '../reducers/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ProductsList from '../components/ProductsList';

const Home = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/products').then(response => {
            setProducts(response.data);
        })
    })

    const handleLogout = () => {
        dispatch(unsetUser());
        navigate('/');
    }

    return (
        <>
            <h2>Home</h2>
            <p>welcome {user.fullName}</p>
            <button className='btn btn-primary' onClick={handleLogout}>Log out</button>

            <ProductsList products={products} />
        </>
    )
}

export default Home