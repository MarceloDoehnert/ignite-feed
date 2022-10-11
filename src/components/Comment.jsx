import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

// Hooks
import { useState } from 'react'

export function Comment ({comment, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(comment)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/59656981?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Dochenert Cordeiro</strong>
              <time title="27 de Setembro às 20:00h" dataTime="2022-09-27 20:00:45">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deleter comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}