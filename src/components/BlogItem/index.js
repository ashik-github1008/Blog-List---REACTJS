// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item-container mb-3">
      <div className="title-publishDate-container mb-4">
        <h1 className="blog-title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line mt-1" />
    </li>
  )
}

export default BlogItem
