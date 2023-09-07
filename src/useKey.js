import { useEffect } from "react";

export function useKey(keyPressed, actionToPerform) {
    useEffect(
        function () {
            function callback(event) {
                if (event.code.toLowerCase() === keyPressed.toLowerCase()) {
                    actionToPerform();
                }
            }

            document.addEventListener('keydown', callback);

            return function () {
                document.removeEventListener("keydown", callback)
            }
        }, [actionToPerform, keyPressed]
    );
}