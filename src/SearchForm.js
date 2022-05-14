import { useInput } from "../hook/useInput"
import { css } from "emotion";

export default function SearchForm({onSearch = f=>f}) {
  const [login, resetLogin] = useInput("");
  const [repo, resetRepo] = useInput("");

  const submit = e => {
    e.preventDefault();
    onSearch(login.value, repo.value);
    resetLogin("");
    resetRepo("");

  };

  return (
    <form className={css`
    display: flex;
    justify-content: space-around;
    margin: 0.25em;
    button {
      margin: 0.25em;
    }
    input {
      margin: 0.25em;
      &:first-child {
        flex: 1;
      }
    }
  `}
    onSubmit={submit}>
      <input {...login}
        type="text"
        placeholder="login..."
         />
      <input
        {...repo}
        type="text"
        placeholder="repo..."
         />
      <button>Search</button>
    </form>
  );
}