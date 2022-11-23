import axios from "axios";
import { useEffect, useState } from "react";

export const useItem = (API) => {
    const [item, setItem] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                console.log(API);
                const response = await axios.get(API);
                if (response && response.data) setItem(response.data);
                console.log(response.data);
            } catch (error) {
                setErr(error);
            }
        };
        fetchItem();
    }, [API]);

    return { item, err };
};
