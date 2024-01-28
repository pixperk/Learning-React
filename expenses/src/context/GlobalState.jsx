import React , {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
//Initial State


const initialState = {
    
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
}

//Create context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (storedTransactions) {
            dispatch({
                type: 'SET_TRANSACTIONS',
                payload: storedTransactions
            });
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);
    

 

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }



    return(<GlobalContext.Provider value={{transaction:state.transactions,
    deleteTransaction, addTransaction
    }}>
        
        {children}
        </GlobalContext.Provider>)
}