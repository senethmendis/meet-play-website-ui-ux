import { Navbar, Hero, About, Tools, Products, Feature, Team, JoinForm, Footer } from "./components";
import styles from "./styles";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <Navbar />
      </div>
      <div className={`${styles.paddingX}`}>
        <Hero />
        <About />
      </div>
      <div className={`${styles.paddingX}`}>
        <Tools />
        <Products/>
        <Feature/>
        <Team/>
        <JoinForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
