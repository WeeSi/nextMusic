import { useForm } from "react-hook-form";
import { MusicNoteIcon } from "@heroicons/react/solid";
import MnInput from "../input";
import NmBtn from "../button";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8 py-4">
      <MusicNoteIcon className="h-24 w-16 text-amber-500" />
      <h2 className="text-white">Bonjour</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full p-4 space-y-4"
      >
        <MnInput
          label="Nom d'utilisateur"
          name="username"
          placeholder="Entrez votre nom d'utilisateur"
          register={register}
          required
          error={errors.email}
        />
        <MnInput
          label="Mot de passe"
          name="password"
          placeholder="Entrez votre mot de passe"
          register={register}
          error={errors.passowrd}
          required
          type="password"
        />
        <NmBtn label="S'enregistrer" type="submit" />
      </form>
    </div>
  );
}
