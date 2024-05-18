import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Rafael Pelegrini"
        content="Conteúdo que eu escrevi para ser exibido"
      />
      <Post author="Paulo Moreira" content="Cassio fora do coringão" />
    </div>
  );
}
