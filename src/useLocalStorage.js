export function useLocalStorage() {
    const [watched, setWatched] = useState(() => {
        const savedValue = localStorage.getItem("watched");
        return JSON.parse(savedValue) || [];
    });
}