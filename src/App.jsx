// Styles
import "./global.css"
import styles from "./App.module.css"

// Componentes
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <div>
            aaaaaaaaa
          </div>
        </main>
      </div>
      
    </div>
  )
}