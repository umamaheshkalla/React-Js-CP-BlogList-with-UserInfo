import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog

  return (
    <div className="Blog-container">
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <p>{publishedDate}</p>
      </div>
    </div>
  )
}

export default BlogItem
