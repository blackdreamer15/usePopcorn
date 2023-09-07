export function useKey() {
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