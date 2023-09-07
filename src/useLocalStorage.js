import { useState, useEffect } from "react";

export function useLocalStorage(initialValue, key) {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return JSON.parse(savedValue) || [];
    });


    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));

        },
        [value]
    );

    return [value, setValue];
}