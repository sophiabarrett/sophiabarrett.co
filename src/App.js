import { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header 
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <h1>Hello World!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
