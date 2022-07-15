import styles from './App.module.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Post from './components/post/Post';
import Creator from './components/Creator/Creator'

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Main}>
        <Router>
          <Routes>
            <Route path="/" element={<Post/>} />
            <Route path="/create" element={<Creator />} />
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;

