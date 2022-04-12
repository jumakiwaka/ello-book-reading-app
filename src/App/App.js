import { Routes, Route } from 'react-router-dom';
import Content from './Content';
import Book from '../Book';
import './App.css';
import Header from './Header';
import WordToken from '../Book/Page/WordToken';
import Page404 from './404';

function App() {
  return (
    <Content>
      <Header />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/word-token/:token" element={<WordToken />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Content>
  );
}

export default App;
