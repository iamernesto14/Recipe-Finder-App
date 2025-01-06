import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Pages/Home';
import { RecipeProvider } from './component/RecipeContext';



function App() {
  

  

  return (
    <>
      <Router>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecipeProvider>
    </Router>
    </>
  )
}

export default App
