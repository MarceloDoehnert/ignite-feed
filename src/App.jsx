// Styles
import "./global.css"
import styles from "./App.module.css"

// Componentes
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

export function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
        </main>
      </div>
      
    </div>
  )
}