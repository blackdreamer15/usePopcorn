import { useState, useEffect } from "react";

export function useLocalStorage() {
    const [watched, setWatched] = useState(() => {
        const savedValue = localStorage.getItem("watched");
        return JSON.parse(savedValue) || [];
    });


    useEffect(
        function () {
            localStorage.setItem("watched", JSON.stringify(watched));

        }, [watched]
    );
}