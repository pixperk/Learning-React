import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword]= useState("")

  //useref
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for(let i=1; i<=length; i++){
      let ind = Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(ind)  
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange[0,100]
    window.navigator.clipboard.writeText(password)
    alert("Password Copied!")
  },
  [password])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <header>
      <p className="text-sm text-gray-300 mt-4"> Note: The generated password will change when the page is reloaded.</p></header>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-cyan-800 text-cyan-500">
      <h1 className="text-white text-center text-2xl font-bold mb-3">Password Generator</h1>
      <div className="flex items-center border rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-gray-200 text-gray-800"
          placeholder="Generated Password"
          readOnly
          //reference
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-3 py-1 rounded focus:outline-none focus:shadow-outline"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-gray-300">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1 text-gray-300">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1 text-gray-300">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
        <div>
        <button
              onClick={passwordGenerator}
              className="bg-turquoise-500 hover:bg-turquoise-700 text-white font-bold px-3 py-1 rounded focus:outline-none focus:shadow-outline"
            >
              Generate New
            </button>
           
        </div>
      </div>
    </div>
    <footer>
    <p className="text-sm text-gray-300 mt-4">
    © Yashaswi 2024
        </p>
    </footer>
    </>
  )
}

export default App
