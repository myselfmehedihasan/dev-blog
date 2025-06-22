import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utility";
import BlogCard from "../Components/BlogCard/BlogCard";
import EmptyState from "../Components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  const handleDelte = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1)
    return <EmptyState message="No Bookmarks Available!" address='/blogs'
        label='Browse Blogs'></EmptyState>;

  return (
    <div className="max-w-fit grid px-2 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
      {blogs.map((blog) => (
        <BlogCard
          handleDelte={handleDelte}
          deletable={true}
          blog={blog}
          key={blog.id}
        ></BlogCard>
      ))}
    </div>
  );
};

export default Bookmarks;
