import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import type { ProgramType } from "../lib/program.definition";

export default function WelcomePage() {
  const programs = useLoaderData() as ProgramType[];
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-8 m-8 lg:p-[5em] lg:mx-auto">
      <h2 className="text-center font-bold text-darkgreen">
        <a href="about">A PROPOS DE BYS</a>
      </h2>
      <p className="lg:w-1/2 lg:text-justify lg:self-center lg:text-lg">
        BYS (Build Your Strength) est une application dédiée aux pratiquants de
        musculation confirmés, conçue pour optimiser leur progression grâce à
        des programmes d'entraînement ultra-personnalisés. Ancrée dans des
        valeurs fondamentales telles que l'excellence, la discipline, la santé
        et le dépassement de soi, BYS accompagne les athlètes dans leur quête de
        performance en alliant méthodologie éprouvée et innovation. Chaque
        programme est conçu pour repousser les limites, favoriser une
        progression constante et garantir des résultats durables, tout en
        respectant l'équilibre entre intensité et récupération. Avec BYS,
        transformez votre passion en véritable succès athlétique.
      </p>

      <h2 className="text-center font-bold text-darkgreen lg:mt-8">
        <a href="programs"> NOS PROGRAMMES</a>
      </h2>

      <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-16">
        {programs?.map((p) => {
          return (
            <button type="button" key={p.id} onClick={() => navigate("/login")}>
              <section>
                <div className="lg:w-[30em] lg:h-[10em] mb-8">
                  <h2 className="bg-accent rounded-lg p-2 hover:bg-darkgreen hover:text-white lg:mb-2">
                    {p.title}
                  </h2>
                  <p>{p.description}</p>
                </div>
              </section>
            </button>
          );
        })}
      </div>

      <p className="lg:text-center lg:mt-12">
        Tu souhaites nous{" "}
        <span className="font-bold text-darkgreen">contacter</span> ? C'est par{" "}
        <a
          className="text-center font-bold text-darkgreen"
          href="mailto:bys@gmail.com?subject=Sujet%20du%20mail&body=Contenu%20du%20message"
        >
          ICI
        </a>{" "}
      </p>
    </section>
  );
}
