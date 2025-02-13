import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { UserSignInType } from "../lib/user.definitions";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignInType>();
  const onSubmit: SubmitHandler<UserSignInType> = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/login`,

        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        toast.success("Tu es bien connecté !");
        navigate("/");
      } else {
        toast.error("Une erreur est survenue lors de votre connexion");
      }
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  return (
    <>
      <h1 className="font-bold text-darkgreen text-center mt-12 mb-8 lg:mt-20 lg:mb-20 lg:text-2xl">
        CONNECTE TOI POUR PROFITER DE NOS PROGRAMMES!
      </h1>
      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "champ requis",
              minLength: {
                value: 2,
                message: "Le champ doit au moins contenir 2 caractères",
              },
              maxLength: {
                value: 30,
                message: "Le champ ne peut pas contenir plus de 30 caractères",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: "Adresse email invalide",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="email"
            id="email"
            name="email"
            placeholder="pierre.dupont@gmail.com"
          />
          {typeof errors.email?.message === "string" && (
            <span className="text-red-300">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Mot de passe
          </label>
          <input
            {...register("password", {
              required: "champ requis",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s:])[^\s]{12,30}$/,
                message:
                  "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.",
              },
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caractères",
              },
              maxLength: {
                value: 30,
                message:
                  "Le mot de passe ne peut pas contenir plus de 30 caractères",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          {typeof errors.password?.message === "string" && (
            <span className="text-red-300">{errors.password.message}</span>
          )}
        </div>

        <button
          className="w-full bg-accent text-black text-sm font-bold py-2 px-4 rounded-md hover:bg-black hover:text-white transition duration-300"
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </>
  );
}
