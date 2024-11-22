import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => { // useEffect được sử dụng để kiểm tra xem người dùng đã đăng nhập chưa(trong trường hợp không thì chuyển hướng người dùng tới trang login)
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    const [count, setCount] = useState(0); // useState is used to create a local state variable
    const reduxCount = useSelector((state) => state.counter.value); // useSelector is used to access the Redux store state
    const dispatch = useDispatch(); // useDispatch is used to dispatch actions to the Redux store

    const incrementCount = useCallback(() => { // useCallback is used to prevent the function from being recreated on every render
        setCount(count + 1);
    }, [count]);

    const resetCount = useCallback(() => {
        setCount(0);
    }, []);

    const doubleCount = useMemo(() => count * 2, [count]); // useMemo is used to prevent the value from being recalculated on every render

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white p-4">
            <h1 className="text-4xl font-bold mb-3">Home Page</h1>
            <p className="text-lg mb-2">
                This page is styled <i className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">beautifully</i> using <b>Tailwind CSS.</b>
            </p>
            <Link to='/login' className="underline text-white mb-2 login">Login</Link>
            <Link to='/about' className="underline text-white mb-4 about">About</Link>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-80 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Local Counter</h2>
                <p className="text-lg mb-2">Count: <span className="font-bold">{count}</span></p>
                <p className="text-lg mb-4">Double Count: <span className="font-bold">{doubleCount}</span></p>
                <button
                    onClick={incrementCount}
                    className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition duration-300 mb-2"
                >
                    Increment Local Count
                </button>
                <button
                    onClick={resetCount}
                    className="bg-red-500 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Reset Local Count
                </button>
            </div>

            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-semibold mb-4">Redux Counter</h2>
                <p className="text-lg mb-4">Redux Count: <span className="font-bold">{reduxCount}</span></p>
                <button
                    onClick={() => dispatch(increment())} // Dispatch the increment action
                    className="bg-green-500 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded mr-2 transition duration-300 mb-2"
                >
                    Increment Redux Count
                </button>
                <button
                    onClick={() => dispatch(decrement())} // Dispatch the decrement action
                    className="bg-red-500 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
                >
                    Decrement Redux Count
                </button>
            </div>
        </div>
    );
}

export default Home;
