import { useEffect, useState } from "react";

export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    const KEY = 'a368daec';


    useEffect(
        function () {
            const controller = new AbortController();

            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");

                    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );

                    if (!res.ok)
                        throw new Error("Something went wrong with fetching movies.");

                    const data = await res.json();
                    if (data.Response === "False")
                        throw new Error("Movie not found");

                    setMovies(data.Search);
                    setError("");
                }
                catch (err) {
                    if (err.name !== "AbortError") {
                        console.log(err.message);
                        setError(err.message);
                    }
                }
                finally {
                    setIsLoading(false);
                }
            }

            if (!query.length) {
                setMovies([]);
                setError("");
                return;
            }

            //The commented function was to close the movie details of the previously selected movie whenever we are making a new query. Adding it to the dependency array is shooting infinite errors. Once I figure it out, I will fix it.
            // handleCloseMovie();
            fetchMovies();

            return function () {
                controller.abort();
            }
        }, [query]
    );

    return { isLoading, error, movies };
}