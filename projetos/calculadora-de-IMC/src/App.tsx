import { useState } from 'react';
import styles from './App.module.css';
import { GridItem } from './components/GridItem'

import { calculateImc, levels } from './helpers/imc';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
    } else {
      alert('Digite todos os campos.');
    }
  }

  return (
    <>
      <main className={styles.main}>
        <header className={styles.headerContainer}>
          <h2>IMC</h2>
          powered by Fernando
        </header>
        <section className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>
              IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela
              Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            </p>

            <input
              type="number"
              placeholder="Digite a sua altura. EX 1.5 (em metros)"
              min={0}
              max={200}
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
            />

            <input
              type="number"
              placeholder="Digite o sua peso. EX 75.3 (em kg)"
              min={0}
              max={200}
              value={weightField > 0 ? weightField : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
            />

            <button onClick={handleCalculateButton}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
