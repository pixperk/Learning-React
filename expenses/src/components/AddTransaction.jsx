import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const {addTransaction} = useContext(GlobalContext)

    const submit = (e) => {
      e.preventDefault();

      const newTransaction={
        id : Date.now(),
        text,
        amount:+amount
      }

      addTransaction(newTransaction)
      setText('')
      setAmount('')
    }

  return (
    <div>
       <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br/>
            (negative - expense, positive - income)</label
          >
          <input type="number"  value={amount}
          onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
