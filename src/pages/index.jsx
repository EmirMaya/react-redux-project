import Axios from 'axios';
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/user/userSlice'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = e => {
        e.preventDefault();
        Axios.get("http://localhost:3000/users").then(response => {
            const users = response.data;
            const userToLog = users.find(user => user.email === emailField.current.value);

            if (userToLog) {
                if (userToLog.password === passwordField.current.value) {
                    console.log('valido');
                    dispatch(setUser({
                        email: userToLog.email,
                        fullName: `${userToLog.first_name} ${userToLog.last_name}`,
                        token: Date.now(),
                    }))
                    navigate('/home')
                }
            }
        })
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-6'>
                <h2 className='mb-4'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Email address</label>
                        <input type="email" className='form-control' ref={emailField} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control' ref={passwordField} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Index