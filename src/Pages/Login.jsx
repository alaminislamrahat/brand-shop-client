import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import bg from '../assets/13763.jpg'


const Login = () => {
    const { login } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        // login 
        login(email, password)
            .then(result => {
                console.log(result);
                navigate(location.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error.message);
            })


    }

    return (
        <div
        style={{backgroundImage : `url(${bg})`}} 
        className="bg-fixed bg-cover bg-center bg-no-repeat text-white">

            <h2 className=" pt-24 text-4xl text-center font-bold text-white">Pleasse login</h2>

            <div className="max-w-6xl">
                <div className="md:ml-20 md:w-full">
                    <form
                        onSubmit={handleLogin} className="card-body  text-center mx-auto md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline border-2 font-bold text-purple-900 border-purple-600">Login</button>
                        </div>
                        <p>New in this website.  <Link to="/register"><span className="font-bold text-purple-800">Register</span></Link> now</p>

                    </form>

                </div>

            </div>

        </div>

    );
};

export default Login;