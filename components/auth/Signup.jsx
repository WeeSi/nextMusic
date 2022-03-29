import { useForm } from "react-hook-form";
import { MusicNoteIcon } from "@heroicons/react/solid";
import NmInput from "../input";
import NmBtn from "../button";

export default function Signup({ setMode }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div
    className="px-6 py-8 rounded-md shadow-xl"
    style={{ minWidth: "400px", background: "#2a2a2a" }}
  >
     <div className="text-white text-center text-xl font-md mt-2 mb-8 tracking-wide">
        <span className="text-lg opacity-50">Welcome</span>
        <h1>Sign up</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <NmInput
          label="Nom d'utilisateur"
          name="username"
          placeholder="Entrez votre nom d'utilisateur"
          register={register}
          required
          error={errors.email}
        />

        <NmInput
          label="Mot de passe"
          name="password"
          placeholder="Entrez votre mot de passe"
          register={register}
          error={errors.passowrd}
          required
          type="password"
        />

        <NmBtn label="S'enregistrer" type="submit"  styles={{ marginTop: "1.75rem" }} />
      </form>
      <div className="flex space-x-2 pt-8 w-full text-white">
        <span className="text-sm flex min-w-fit">Déjà enregister ? </span>
        <NmBtn label="Connecte-toi !" variant="text" action={setMode} />
      </div>
    </div>
  );
}
