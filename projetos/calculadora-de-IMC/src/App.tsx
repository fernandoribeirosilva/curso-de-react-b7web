import { useState } from 'react';
import styles from './App.module.css';

function App() {

  return (
    <>
      <main className={styles.main}>
        <header className={styles.headerContainer}>
          <h2>IMC</h2>
          powered by Fernando
        </header>
        <section className={styles.container}>
          <div className={styles.leftSide}>
            <input type="number" min={0} max={200} />
          </div>
          <div className={styles.rightSide}>
            ...
          </div>
        </section>
      </main>
    </>
  )
}

export default App
