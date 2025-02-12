import { useLoaderData } from "react-router-dom";
import type { ProgramType } from "../lib/program.definition";

export function AdminProgramPage() {
  const programs = useLoaderData() as ProgramType[];

  return (
    <>
      <section>
        <table>
          <tbody>
            {programs.length > 0 &&
              programs.map((p) => (
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{p.title}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
      <button
        type="button"
        className="bg-darkgreen rounded-lg p-2 text-white ml-4"
      >
        Ajouter un programme
      </button>
    </>
  );
}
