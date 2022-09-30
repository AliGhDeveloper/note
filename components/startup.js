import { useEffect, useContext } from "react"
import { getData } from "utiles/fetchData"
import { Context } from "store/globalstate"
export default function StartUp({children}) {
    const { dispatch } = useContext(Context);
    useEffect(() => {
        getData('/notes') 
            .then( result => {
                if(!result.error) return dispatch({ type: 'ADD_NOTES', payload: result})
            })
    }, [])
    return (
        <>
            {children}
        </>
    )
}