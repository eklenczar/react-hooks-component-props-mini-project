import Article from "./Article"

const ArticleList = ({ posts }) => {
    const renderPosts = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} value={"January 1, 1970"} preview={post.preview} />
    })
  return (
    <main>
        {renderPosts}
    </main>
  )
}

export default ArticleList