import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <div>
      {blogsData.map(eachItem => (
        <BlogItem key={eachItem.id} blog={eachItem} />
      ))}
    </div>
  )
}

export default BlogList
