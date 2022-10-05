// Styles
import "./global.css"
import styles from "./App.module.css"

// Componentes
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mateus-dias-cwb.png",
      name: "Mateus Dias",
      role: "Web Developer" 
    },
    content : [
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      {type: "link", content: "jane.design/doctorcare", }, 
    ],
    publishedAt: new Date("2022-10-04 20:35:47")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MarceloDoehnert.png",
      name: "Carlos Viana",
      role: "Web Developer" 
    },
    content : [
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      {type: "link", content: "jane.design/doctorcare", }, 
    ],
    publishedAt: new Date("2022-10-01 13:45:47")
  },
]

export function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map(post => {
            return <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
      
    </div>
  )
}