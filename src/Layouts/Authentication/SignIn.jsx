import { useForm } from "react-hook-form";
import { Link } from "react-router";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-w-[350px] mx-auto">
      {/* Logo */}
      {/* Welcome */}
      <h1 className="px-6 text-2xl md:text-3xl lg:text-4xl font-extrabold">
        Welcome Back
      </h1>
      <p className="px-7 text-sm">Login with ZapShift</p>
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
          <label className="label">Email</label>
          <input
            {...register("email", { required: "Email Address is required" })}
            // aria-invalid={errors.email ? "true" : "false"}
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4 bg-primary border-none text-black-12 shadow-none">
            Login
          </button>
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </form>
      </div>
      <p className="pl-6">
        Don't have any account?{" "}
        <Link to="/register" className="text-green-8 hover:underline">
          Register
        </Link>{" "}
      </p>
      <div className="divider px-6 text-sm text-gray-500">or</div>
      <button className="btn ml-6  text-black border-none w-[312px] mx-auto">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default SignIn;
