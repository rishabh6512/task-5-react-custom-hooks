import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to fetch.");
            }

            const result = await response.json();
            setData(result);

        } catch (err) {
            if (err instanceof TypeError) {
                setError("Failed to fetch");
            } else {
                setError("Failed to fetch");
            }
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};

export default useFetch;