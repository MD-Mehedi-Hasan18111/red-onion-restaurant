import { useEffect } from "react";
import { useState } from "react";

const useFood = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('/meals.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return {
        foods,
        setFoods
    }
}

export default useFood;