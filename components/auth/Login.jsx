import { useForm } from "react-hook-form";
import { MusicNoteIcon, ArrowRightIcon } from "@heroicons/react/solid";
import users from "../../fakeapi/usersJson";
import NmBtn from "../button";
import NmInput from "../input";

const Login = ({ setMode }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const send = (data) => {
    if (data) {
      let findUser = users.find((item) => {
        if (item.username == data.username) {
          return item;
        }
      });
      console.log(findUser);
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div
      className="p-6 rounded-md border"
      style={{ minWidth: "400px", background: "#2a2a2a" }}
    >
      <div className="text-white text-center text-xl font-md mt-2 mb-5 tracking-wide">
        <p>Bon retour parmis nous, </p>
        <p>connectez-vous :)</p>
      </div>

      <div className="flex align-center justify-center text-blue-500">
        <MusicNoteIcon className="w-24 h-24 mb-8 mt-8" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <NmInput
          label="Identifiant"
          name="identifiant"
          register={register}
          required={"Votre identifiant est obligatoire"}
          error={errors.identifiant}
          placeholder="Entrez votre identifiant"
        />
        <NmInput
          type="password"
          label="Mot de passe"
          name="password"
          register={register}
          required={"Le mot de passe est obligatoire"}
          error={errors.password}
          placeholder="Entrez votre mot de passe"
        />
        <NmBtn
          label="Se connecter"
          type="submit"
          styles={{ marginTop: "1.75rem" }}
        />
      </form>

      <div className="flex space-x-2 pt-8 w-full text-white">
        <span className="flex min-w-fit">Pas encore inscrit ? </span>
        <NmBtn
          label="S'inscrire !"
          variant="text"
          action={setMode}
          svg={<ArrowRightIcon className="h-6 w-6" />}
        />
      </div>
    </div>
  );
};

export default Login;
