import Menu from 'components/Menu';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Menu/>}>

        </Route>
      </Routes>
    </Router>
  );
}