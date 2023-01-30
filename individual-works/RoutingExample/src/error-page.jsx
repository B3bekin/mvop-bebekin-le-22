import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Něco mi tu nehraje!</h2>
      <h3>A já to nejsem 😠</h3>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
