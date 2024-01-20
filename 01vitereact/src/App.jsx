import Func from "./func1"
function App() {
 const username = "Yashaswi"
  return (
    <> {/* Only one element can be returned */}
    <Func/>
    <p>test Para for {username}{/* evaluated expression */}</p>
    </>
  )
}

export default App
