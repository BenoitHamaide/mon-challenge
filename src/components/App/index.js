// == Import
import Footer from '../footers/Footer';
import Title from '../titles/Title';
import TitleMain from '../titles/TitleMain';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
     <Title />
     <TitleMain />
     <Footer />
    </div>
  );
}

// == Export
export default App;
