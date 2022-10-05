import {format, formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

// Components
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"

// Style
import styles from "./Post.module.css"

// Hooks
import { useState } from "react"

export function Post({author, content, publishedAt}) {

  const [newCommentText, setNewCommentText] = useState('')

  const [comments, setComments] = useState([
    "ótimo post, gostei muito"
  ])

  const dateTime = format(publishedAt, "d 'de' LLLL 'às' HH'h'", { locale: ptBR})

  const dateNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
  
  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateTime} dataTime={publishedAt.toISOString()}>{dateNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {

          switch (item.type) {
            case "paragraph": return <p>{item.content}</p> 

            case "link": return <p><a href="">{item.content}</a></p>
            default:
              break;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment comment={comment} />
        })}
      </div>
    </article>
  )
}