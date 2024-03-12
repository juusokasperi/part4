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

const mostLikes = (blogs) => {
  const blogsByAuthor = _.groupBy(blogs, 'author')

  const likesByAuthor = _.map(blogsByAuthor, (blogs, author) => ({
    author,
    likes: _.reduce(blogs, (sum, blog) => sum + blog.likes, 0)
  }))

  return _.maxBy(likesByAuthor, 'likes')
}

const mostWrittenBlogs = (blogs) => {
  const blogsByAuthor = _.groupBy(blogs, 'author')

  const mostBlogs = _.map(blogsByAuthor, (author, id) => ({
    author: id,
    blogs: author.length
  }))

  const mostWritten = _.maxBy(mostBlogs, 'blogs')
  return mostWritten
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostWrittenBlogs,
  mostLikes
}