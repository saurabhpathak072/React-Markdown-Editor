/** @format */

import { useState } from 'react';
import './App.css';
import ReactMarkDown from 'react-markdown';

function App() {
  const [markDown, setMarkDown] = useState('## Markdown Preview');
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
          id='markdown'
        />
        <article className='result'>
          <ReactMarkDown>{markDown}</ReactMarkDown>
        </article>
      </section>
    </main>
  );
}

export default App;
