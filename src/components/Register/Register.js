import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import GoogleSvg from "../../Assets/svg/icons8-google.svg";
import Github from '../../Assets/svg/icons8-github.svg'
import { AuthContext } from "../../context/Context";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUserEmailAndPassword, googleLogin, githubLogin, loading } =
    useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, name, password } = data;

    createUserEmailAndPassword(email, password)
      .then((result) => {
        toast.success(" Login successfully ");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error));
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error));
  };
  const handleGithub =()=>{
    githubLogin().then(result =>{

      navigate(from, { replace: true });

    }).catch(error => console.error(error))
 }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Pleaser Register !</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo url</span>
                </label>
                <input
                  {...register("photo url")}
                  type="text"
                  name="Photo Url"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account :{" "}
                <button className="btn text-emerald-500 btn-active btn-link">
                  {" "}
                  <Link to="/login">Login Here</Link>
                </button>
              </p>
              <div
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center cursor-pointer border bg-emerald-200 hover:bg-emerald-300 rounded-full pl-4"
              >
                <img className="w-12 " src={GoogleSvg} alt="" />
                <p className="px-4">continue with google</p>
                
              </div>
              <div
                onClick={handleGithub}
                className="flex justify-center items-center cursor-pointer border bg-gray-300 hover:bg-gray-400 rounded-full pl-4"
              >
                <img className="w-12 " src={Github} alt="" />
                <p className="px-4">continue with Github</p>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
