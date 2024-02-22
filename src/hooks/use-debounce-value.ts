import { useEffect, useState } from "react";

export default function useDebouceValue<T = unknown>(value:T, delay: number) {
    const [debouncedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDeboucedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    
    return debouncedValue;
}