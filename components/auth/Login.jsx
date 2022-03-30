import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "@heroicons/react/solid";
import users from "../../fakeapi/usersJson";
import NmBtn from "../button";
import NmInput from "../input";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext, useState } from "react";
import Router from "next/router";
import { Context } from "../../context";

const Login = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context);

  const onSubmit = (data) => {
    if (data) {
      setLoading(true);
      let findUser = users.find((item) => {
        if (item.username == data.identifiant) {
          return item;
        }
      });

      if (findUser) {
        if (findUser.password === data.password) {
          delete findUser.password;

          localStorage.setItem("user", JSON.stringify(findUser));
          dispatch({ type: "LOGGED_IN_USER", payload: findUser });
          Router.push("home");
        }
      }

      return setLoading(false);
    }
  };

  return (
    <div
      className="px-6 py-8 rounded-md shadow-xl"
      style={{ minWidth: "400px", background: "#2a2a2a" }}
    >
      <div className="text-white text-center text-xl font-md mt-2 mb-8 tracking-wide">
        <span className="text-lg opacity-50">Welcome back</span>
        <h1>Log into your account</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <NmInput
          label="Username"
          name="identifiant"
          register={register}
          required={"Username is required"}
          error={errors.identifiant}
          placeholder="Enter your username"
        />
        <NmInput
          type="password"
          label="Password"
          name="password"
          register={register}
          required={"Password is required"}
          error={errors.password}
          placeholder="Enter your password"
        />
        <NmBtn
          label={loading ? <CircularProgress /> : "Login now"}
          type="submit"
          styles={{ marginTop: "1.75rem" }}
        />
      </form>

      <div className="flex space-x-2 pt-8 w-full text-white">
        <span className="text-sm flex min-w-fit">Not registered yet ? </span>
        <NmBtn
          label="Sign Up"
          variant="text"
          action={setMode}
          svg={<ArrowRightIcon className="h-4 w-4" />}
        />
      </div>
    </div>
  );
};

export default Login;
