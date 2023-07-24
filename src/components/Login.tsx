import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import LoginInput from "./utilities/LoginInput";

type LoginDetails = {
  username: string;
  password: string;
};

const Login = () => {
  const initialValues: LoginDetails = {
    username: "",
    password: "",
  };

  const LoginSchema = yup.object().shape({
    username: yup.string().required().label("Username"),
    password: yup.string().required().label("Password"),
  });

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const url = "http://127.0.0.1:8000/api/login";
      console.log("Values: ", values);
    },
    validationSchema: LoginSchema,
  });

  return (
    <>
      <div className="login_form border-2 border-green-700 bg-white rounded-lg p-5 mx-auto">
        <header className="flex justify-center items-center flex-col">
          {/* <img
        //    src={MukLogo}
           alt="logo"
           style={{ width: "200px", height: "200px" }}
           className="me-5 muk_logo"
           loading="lazy"
         /> */}
          <p className="text-green-700 font-semibold text-xl">Peps</p>
          {/* <p className="text-green-700 font-semibold">Teaching Load</p> */}
        </header>
        <div className="">
          <div className=" bg-white mt-2 rounded-md mb-5">
            <form className="" onSubmit={handleSubmit}>
              <h4 className="text-green-700 text-center text-xl font-semibold mb-5">
                Login into your account
              </h4>
              <div>
                <LoginInput
                  label="Email"
                  name="username"
                  type="text"
                  touched={touched}
                  errors={errors}
                  placeholder="Please enter your username here..."
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <div>
                <LoginInput
                  label="Password"
                  name="password"
                  type="password"
                  touched={touched}
                  errors={errors}
                  placeholder="Please enter your password name.."
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>

              <div className="flex justify-center items-center w-full">
                {isSubmitting ? (
                  <button
                    className="w-full text-white px-4 rounded py-2 bg-green-400 mt-2 "
                    type="submit"
                    disabled
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="w-full text-white px-4 rounded py-2 bg-green-700 mt-2 hover:scale-95"
                    type="submit"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
            <p className="mt-3 text-dark">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="text-green-700">Register</span>
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
