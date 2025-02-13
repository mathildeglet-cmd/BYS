import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-row justify-between mt-4 ml-4 mr-4 lg:flex">
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/images/logo.jpg"
          alt="une femme musclée"
          className="w-[5em]"
        />{" "}
      </button>
      <section className="flex flex-row gap-1.5 h-[3em] lg:gap-20 lg:mr-4">
        <button
          type="button"
          onClick={() => {
            navigate("/register");
          }}
          className="border-solid border-1 border-slate-400 hover:bg-accent hover:border-none p-0.5 rounded-md lg:border-solid lg:border-1 lg:border-slate-400 lg:rounded-xl lg:h-[3em] lg:p-3 lg:hover:bg-accent lg:hover:border-none"
        >
          S'inscrire
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
          className="border-solid border-1 border-slate-400 hover:bg-accent hover:border-none p-1 rounded-md lg:border-solid lg:border-1 lg:border-slate-400 lg:rounded-xl lg:h-[3em] lg:p-3 lg:hover:bg-accent lg:hover:border-none"
        >
          Se connecter
        </button>
      </section>
    </section>
  );
}
