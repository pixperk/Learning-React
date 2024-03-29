import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {
  const {transaction} = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
        
      </ul>

    </>
  )
}

export default TransactionList
