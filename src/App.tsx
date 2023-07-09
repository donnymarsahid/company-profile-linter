import Layout from "./components/molecules/Layout";
import "./index.css";
import { Hero, Navbar, Service, About, Client, Testimony, Footer, Contact } from "@/components/section";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Client />
      <Testimony />
      <Footer />
    </Layout>
  );
}

export default App;
