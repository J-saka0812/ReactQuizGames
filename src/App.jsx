import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import { ROUTES } from './const'


function App() {

  return (
    <>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.QUIZ} element={<QuizPage />} />
            <Route path={ROUTES.RESULT} element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
