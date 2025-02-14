import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleIsOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <section className="flex flex-row justify-between mt-4 ml-4 mr-4 lg:flex">
      <nav>
        <button type="button" onClick={handleIsOpenMenu}>
          <Menu />
        </button>
        {isOpenMenu && (
          <section className="flex flex-col gap-2 mt-4 lg:w-[10em] fixed bg-accent rounded-md p-2">
            <a href="about">A propos</a>
            <a href="programs">Nos programmes</a>
            <a href="contact_us">Notre boutique</a>
          </section>
        )}
      </nav>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="../public/images/logo.jpg"
          alt="une femme musclée"
          className="w-[5em]"
        />
      </button>{" "}
      <section className="flex flex-col lg:flex lg:flex-row gap-1 lg:gap-20 lg:mr-4">
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
