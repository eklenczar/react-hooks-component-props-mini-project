

const Article = ({ title, date, value, preview }) => {
  return (
    <article>
        <h3>{title}</h3>
        <small>{date ? date : value}</small>
        <p>{preview}</p>
    </article>
  )
}

export default Article