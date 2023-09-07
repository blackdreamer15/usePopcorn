import { useEffect } from "react";

export function useKey(keyPressed, actionToPerform) {
    useEffect(
        function () {
            function callback(event) {
                if (event.code === "Escape") {
                    onCloseMovie();
                }
            }

            document.addEventListener('keydown', callback);

            return function () {
                document.removeEventListener("keydown", callback)
            }
        }, [onCloseMovie]
    );
}