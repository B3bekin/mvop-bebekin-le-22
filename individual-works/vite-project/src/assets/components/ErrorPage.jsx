import { useRouteError } from "react-router-dom";


function ErrorCatching() {

    // funkce erroru, která hlásí chybu
    const error = useRouteError();

    // hlášení chyby přímo v konzoli
    console.error(error);

    return (
        <div id="error-page">
            <h2>ajaj</h2>
            <p3>chybka se vloudila </p3>

            <p className="bg-red-700 text-center text-white font-extrabold text-3xl">
                {/* znázornění chyby nebo kodu chyby*/}
                <i>{`${error.status}, ${error.statusText}`}</i>
                {/* <i>{error.status || error.message}</i> */}
            </p>

        </div>
    );
}

export default ErrorCatching