import { useState } from "react";
import { Link } from 'react-router-dom';
import bg from '../assets/bg.jpg';


function Login()
{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("username: ", username);
      console.log("password: ", password);
      
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(prevState => !prevState);



    return(
        

        <div className="main-body h-screen bg-slate-50 relative ">
            


            <div className="form-body w-full h-full bg-slate-400 justify-center items-center flex">
                <img src={bg} className="object-cover justify-center items-center w-full h-full absolute"/>
            <form onSubmit={handleSubmit} className=" mx-auto w-[50%] p-8 rounded-lg flex flex-col overflow-clip shadow-sm bg-white bg-opacity-10 backdrop-blur-xl">



                    <h3 className="mb-6 text-center text-xl z-10">Log in to your account</h3>
                    <div className="mb-8 z-10">
                    <label className="block text-white font-bold mb-2 z-10" htmlFor="email">
                    Username
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>



                    <div className="mb-8 z-10">
                    <label className="block text-white font-bold mb-2 z-10" htmlFor="password">
                    Password
                    </label>

                    <div className="relative flex items-center">
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                        type="button"
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={togglePasswordVisibility}
                        >
                        {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M19 12h.01M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" />
                        </svg>
                        ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.94 7.94A5.002 5.002 0 0117 12a5.002 5.002 0 01-9.06 2.94M12 17.97V21M12 3v2.02" />
                        </svg>
                        )}
                        </button>
                    </div>
                    </div>




                    <Link to="/Dashboard"><div className="flex items-center justify-between z-10">
                    <button
                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-sky-400 to-blue-500 z-10"
                    type="submit"
                    >
                    LOGIN
                    </button>
                    </div></Link>

                    <div className="text-center mt-5 z-10 ">
                    <span><Link to="/reset" className="text-blue-500 cursor-pointer"> Forgot Password </Link></span>
                    </div>

                    <div className="text-center mt-5 z-10 ">
                    <span>Don't have an account ? <Link to="/signup" className="text-blue-500 cursor-pointer"> Sign Up </Link></span>
                    </div>
                    </form>

            </div>

            



        </div>
    );
}

export default Login;