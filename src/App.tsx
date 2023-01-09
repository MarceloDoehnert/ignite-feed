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
      role: "Dev Front-end" 
    },
    content : [
      {type: "paragraph", content: "Fala galeraa 👋", },
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀", },
      {type: "link", content: "👉 mateus.design/doctorcare", }, 
    ],
    publishedAt: new Date("2023-01-01 20:35:47")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "Carlos Viana",
      role: "Dev Front-end" 
    },
    content : [
      {type: "paragraph", content: "Fala pessoal 👋", },
      {type: "paragraph", content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻", },
      {type: "link", content: "👉 carlosviana.design", }, 
    ],
    publishedAt: new Date("2023-01-03 13:45:47")
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
            return <Post 
            key={post.id}
            author={post.author} 
            content={post.content} 
            publishedAt={post.publishedAt} 
            />
          })}
        </main>
      </div>
      
    </div>
  )
}