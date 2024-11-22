import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// Trang About sẽ hiển thị thông tin về ứng dụng và nhóm phát triển
function About() {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white p-4">
            <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md">
                <p className="text-lg mb-4">
                    Welcome to our application! This is a simple demo app built to showcase the power of React, Redux, and Tailwind CSS.
                </p>
                <p className="text-lg mb-4">
                    Our team is dedicated to creating user-friendly interfaces and responsive web applications with a focus on performance and scalability.
                </p>
                <p className="text-lg mb-4">
                    We hope you enjoy exploring the features of this app and learning more about modern web development practices!
                </p>
                <div className="flex justify-center">
                    <a href="/home" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-110">
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;

