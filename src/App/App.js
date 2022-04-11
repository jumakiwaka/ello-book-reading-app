import { Routes, Route } from 'react-router-dom';
import Content from './Content';
import Book from '../Book';
import './App.css';
import Header from './Header';
import WordToken from '../Book/Page/WordToken';

function App() {
  return (
    <Content>
      <Header />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/word-token/:token" element={<WordToken />} />
      </Routes>
    </Content>
  );
}

export default App;
