import { useEffect } from "react";
import { useIterator } from "../hook/useIterator";

export default function RepoMenu({
  repositories,
  login,
  selected,
  onSelect = f => f
}) {
  console.log(repositories);
  console.log(selected);
  const [{ name }, previous, next] = useIterator(
    repositories,
    selected ? repositories.findIndex(repo => repo.name === selected) : null
    );

  useEffect(() => {
    if (!name) {
      return;
    }

    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>Previous</button>
        <p>{name}</p>
        <button onClick={next}>Next</button>
      </div>
    </>
  );
}