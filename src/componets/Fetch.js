import { useFetch } from "../hook/useFetch";

export default function Fetch({ uri,
  renderSuccess,
  renderFallback = <p>Loading...</p>,
  renderError = error => (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  )
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) {
    return renderFallback;
  }

  if (error) {
    return renderError;
  }

  if (data) {
    return renderSuccess({data});
  }
}