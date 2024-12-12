import { useState, useEffect, useCallback } from 'react';

const useFetch = (url, category="", options = {}) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setData(prev=> ({...prev, [category]:result}));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (url && !data[category]) {
            fetchData();
        }
    }, [url]);

    return { data, error, loading };
};

export default useFetch;