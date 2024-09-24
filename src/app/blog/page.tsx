
import BlogGrid from '@/components/blog/BlogGrid'
import React from 'react'

export const metadata = {
  title : 'Blog',
  description : 'Creative ideas blog'
}

const BlogPage = () => {
  return (
    <div>
<BlogGrid/>
    </div>
  )
}

export default BlogPage