import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name:"queenmovl2" ,
  description:"Movies To Watch List Manager" ,
  link:"https://github.com/mpedroni/queenmovl",
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}