const _ = require('lodash')

const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }
  return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer = (mostLikedBlog, blog) => {
    return mostLikedBlog.likes > blog.likes ? mostLikedBlog : blog
  }
  return blogs.reduce(reducer, {})
}


const mostWrittenBlogs = (blogs) => {
  const blogsByAuthor = _(blogs)
    .groupBy('author')
    .map((author, id) => ({
      author: id,
      blogs: author.length
    }))
    .value()
  const mostBlogs = _.maxBy(blogsByAuthor, 'blogs')
  return mostBlogs
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostWrittenBlogs
}