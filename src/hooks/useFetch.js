import React, { useEffect, useState } from 'react'

const useFetch = (url, active, promo) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                let output = json.items;
                if (active) { output = output.filter(item => item.active === true)};
                if (promo) { output = output.filter(item => item.promo === true)};
                setData(output)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url, active, promo])
    return { loading, error, data }
}

export default useFetch
