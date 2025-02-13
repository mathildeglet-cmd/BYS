import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserFormType } from "../lib/user.definitions";

export default function RegisterPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>();
  const onSubmit: SubmitHandler<UserFormType> = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/user/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        toast.success("Votre compte à bien été créé !");
      } else {
        toast.error("Une erreur est survenue lors de votre inscription");
      }
    } catch (err) {
      console.error("Erreur:", err);
    }
  };
  return (
    <>
      <h1 className="font-bold text-darkgreen text-center mt-12">
        REJOINS-NOUS MAINTENANT!
      </h1>
      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            Prénom
          </label>

          <input
            {...register("firstname", {
              required: "champs requis",
              minLength: {
                value: 2,
                message: "Le champ doit au moins contenir 2 caractères",
              },
              maxLength: {
                value: 30,
                message: "Le champ ne peut pas contenir plus de 30 caractères",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Pierre"
          />
          {typeof errors.firstname?.message === "string" && (
            <span className="text-red-300">{errors.firstname.message}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Nom
          </label>

          <input
            {...register("lastname", {
              required: "champs requis",
              minLength: {
                value: 2,
                message: "Le champ doit au moins contenir 2 caractères",
              },
              maxLength: {
                value: 30,
                message: "Le champ ne peut pas contenir plus de 30 caractères",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Dupont"
          />
          {typeof errors.lastname?.message === "string" && (
            <span className="text-red-300">{errors.lastname.message}</span>
          )}
        </div>

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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirmation du mot de passe
          </label>
          <input
            {...register("confirmPassword", {
              required: "Le champ est requis",
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Les mots de passe ne correspondent pas";
                }
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          {typeof errors.confirmPassword?.message === "string" && (
            <span className="text-red-300">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button
          className="w-full bg-accent text-black text-sm font-bold py-2 px-4 rounded-md hover:bg-black hover:text-white transition duration-300"
          type="submit"
        >
          S'inscrire
        </button>
      </form>
    </>
  );
}
