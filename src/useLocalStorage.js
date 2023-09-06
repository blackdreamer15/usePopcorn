import { useState, useEffect } from "react";

export function useLocalStorage(initialValue) {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem("watched");
        return JSON.parse(savedValue) || [];
    });


    useEffect(
        function () {
            localStorage.setItem("watched", JSON.stringify(value));

        },
        [value]
    );

    return [value, setValue];
}