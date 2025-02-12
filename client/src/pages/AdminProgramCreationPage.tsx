import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { ProgramType } from "../lib/program.definition";

export default function AdminProgramCreationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProgramType>();
  const onSubmit: SubmitHandler<ProgramType> = async (data) => {
    try {
      const response = await fetch("http://localhost:3310/admin/program/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Votre programme à bien été créé !");
      } else {
        toast.error("Erreur lors de l'envoi des données");
      }
    } catch (err) {
      console.error("Erreur:", err);
    }
  };

  return (
    <>
      <h1 className="text-center text-bold- text-darkgreen mt-8">ADMIN</h1>
      <form
        className="flex flex-col mx-auto w-1/2 mt-8 gap-2 lg:border-1 lg:border-solid lg:border-darkgreen lg:rounded-lg lg:p-4 lg:w-1/3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="title">Titre</label>
        <input
          placeholder="Burning 4 weeks"
          {...register("title", { required: true })}
        />
        {errors.title && <span className="text-red-500">champs requis</span>}

        <label htmlFor="description">Descripton</label>
        <input
          placeholder="Ce programme est destiné..."
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">champs requis</span>
        )}

        <button
          type="submit"
          className="mt-4 bg-darkgreen text-white rounded p-2 lg:w-fit"
        >
          Créer
        </button>
      </form>
    </>
  );
}
