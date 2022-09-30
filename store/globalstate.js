import { initialValue } from "./reducers";
import Reducer from "./reducers";
import { useReducer, createContext } from 'react';

export const Context = createContext();

export default function Provider ({ children }) {
    const [state, dispatch] = useReducer(Reducer,initialValue);

    return (
        <Context.Provider value={{state, dispatch}} >
            { children }
        </Context.Provider>
    )
}