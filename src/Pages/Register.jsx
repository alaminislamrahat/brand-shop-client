import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import bg from '../assets/bg2.jpg'


const Register = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { register } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);


        // register 
        register(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div
        style={{backgroundImage : `url(${bg})`}}
         className="bg-fixed bg-cover bg-center bg-no-repeat">

            <h2 className=" pt-24 text-4xl text-center font-bold text-white">Pleasse Register</h2>

            <div className="max-w-6xl ">
                <div className="md:ml-20 md:w-full">
                    <form onSubmit={handleRegister} className="card-body  text-center mx-auto md:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-outline border-sky-500 text-sky-500 border-2 font-bold">Login</button>
                        </div>
                        <p>New in this website.  <Link to="/login"><span className="font-bold text-sky-500">login</span></Link> now</p>

                    </form>

                </div>
                <div className="">

                </div>
            </div>

        </div>
    );
};

export default Register;