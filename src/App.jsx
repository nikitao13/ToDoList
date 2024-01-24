import './App.css'
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {

  return (
    <div className="container max-w-full h-screen flex flex-col">
        <Header />
        <MainContent className="flex-grow"/>
    </div>
  )
}

export default App
