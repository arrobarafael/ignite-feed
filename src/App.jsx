import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          placeat et commodi! Doloremque eligendi unde ratione, fuga mollitia
          sint ea praesentium nihil odit! Repellendus maxime fuga, minus
          voluptatibus rerum ad.
        </main>
      </div>
    </div>
  );
}
