import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <main className="content">
      <div className="section-wrapper">
        <Profile />
        <About />
        <Footer />
      </div>
    </main>
  );
}

export default App;
