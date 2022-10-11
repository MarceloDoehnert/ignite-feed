import { PencilSimpleLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1659935405041-1e76d8bd9de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/59656981?v=4" />

        <strong>Marcelo Doehnert Cordeiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}