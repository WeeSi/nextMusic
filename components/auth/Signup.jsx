import { useForm } from "react-hook-form";
import { ArrowRightIcon } from "@heroicons/react/solid";
import users from "../../fakeapi/usersJson";
import NmBtn from "../button";
import NmInput from "../input";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext, useState } from "react";
import Router from "next/router";
import { Context } from "../../context";
import { encode } from "../../utility/jsEncode.mjs";

export default function Signup({ setMode }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let newUser = { _id: users.length };

    if (data) {
      setLoading(true);
      let isNew = users.find((item) => {
        if (item.username === data.newUsername) return item;
      });

      if (!isNew) {
        const saltRounds = 10;
        const hashedPwd = encode(data.newPassword, saltRounds);

        newUser = {
          username: data.newUsername,
          password: hashedPwd,
          ...newUser,
        };
        users.push(newUser);
      } else {
        console.log("set formError on");
      }
    }
  };

  return (
    <div
      className="px-6 py-8 rounded-md shadow-xl"
      style={{ minWidth: "400px", background: "#2a2a2a" }}
    >
      <div className="text-white text-center text-xl font-md mt-2 mb-8 tracking-wide">
        <span className="text-lg opacity-50">Welcome</span>
        <h1>Sign up</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <NmInput
          label="Username"
          name="newUsername"
          register={register}
          required={"A new username is required"}
          error={errors.identifiant}
          placeholder="Enter your username"
          styles={{color:"black"}}
        />

        <NmInput
          type="password"
          label="Password"
          name="newPassword"
          register={register}
          required={"A new password is required"}
          error={errors.password}
          placeholder="Enter your password"
          styles={{color:"black"}}
        />
        <NmBtn
          label={loading ? <CircularProgress /> : "Register"}
          type="submit"
          styles={{ marginTop: "1.75rem" }}
        />
      </form>
      <div className="flex space-x-2 pt-8 w-full text-white">
        <span className="text-sm flex min-w-fit">Déjà enregister ? </span>
        <NmBtn label="Connecte-toi !" variant="text" action={setMode} />
      </div>
    </div>
  );
}
