import { useForm } from "react-hook-form";
import { MusicNoteIcon } from "@heroicons/react/solid";
import MnInput from "../input";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <MusicNoteIcon className="h-24 w-16 text-amber-500" />
      <h2 className="text-white">Bonjour</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 space-y-4">
        <MnInput placeholder="Username" />
        <MnInput placeholder="Mot de passe" />
      </form>
    </div>
  );
}
