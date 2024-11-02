// Write your JS code here
import './index.css'
import BlogItem from '../BlogItem/index'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogList-container mt-5">
      {blogsList.map(eachBlogList => (
        <BlogItem key={eachBlogList.id} blogDetails={eachBlogList} />
      ))}
    </ul>
  )
}

export default BlogList
