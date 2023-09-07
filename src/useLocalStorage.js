import { useState, useEffect } from "react";

export function useLocalStorage(initialValue, key) {
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    });


    useEffect(
        function () {
            localStorage.setItem(key, JSON.stringify(value));

        },
        [key, value]
    );

    return [value, setValue];
}