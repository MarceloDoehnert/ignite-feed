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
    "ótimo post, gostei muito",
  ])

  const dateTime = format(publishedAt, "d 'de' LLLL 'às' HH'h'", { locale: ptBR})

  const dateNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
  
  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentEmpty() {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete 
    })

    setComments(commentsWithoutDeletedOne)
  }

  const newCommentEmpty = newCommentText.length === 0

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

        <time title={dateTime} dateTime={publishedAt.toISOString()}>{dateNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {

          switch (item.type) {
            case "paragraph": return <p key={item.content}>{item.content}</p> 

            case "link": return <p key={item.content}><a href="">{item.content}</a></p>
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
          onInvalid={handleNewCommentEmpty}
          required
        />

        <footer>
          <button disabled={newCommentEmpty} type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment 
          onDeleteComment={deleteComment}
          key={comment} 
          comment={comment} 
          />
          )
        })}
      </div>
    </article>
  )
}