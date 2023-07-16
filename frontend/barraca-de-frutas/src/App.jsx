import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { EditFruit } from './pages/editFruit/EditFruit';
import { RegisterFruit } from './pages/registerFruit/RegisterFruit';
import './App.css'
import { RegisterSuccess } from './pages/registerSuccess/RegisterSuccess';

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@700&display=swap" rel="stylesheet"/> 
      <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@700&family=Poppins:wght@400&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@700&family=Poppins:wght@300;700;800&display=swap" rel="stylesheet"/> 

      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/editar-fruta/:idFruit" element={<EditFruit/>}/>
          <Route path="/cadastrar-fruta" element={<RegisterFruit/>}/>
          <Route path="/sucesso-cadastro/:fruit" element={<RegisterSuccess/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
