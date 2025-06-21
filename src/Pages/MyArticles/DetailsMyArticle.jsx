import React from 'react'
import { useLoaderData } from 'react-router'

const DetailsMyArticle = () => {
    const details = useLoaderData()
 const {
    title,
    category,
    content,
    tags,
    author_photo,
    author_name,
    email,
    publishedAt,
  } = details;

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-cyan-50 text-cyan-700 dark:bg-cyan-700 dark:text-cyan-50 shadow-lg rounded-xl border border-gray-200">
      <div className="flex items-center gap-4 mb-4 ">
        <img
          src={author_photo}
          alt={author_name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{author_name}</h2>
          <p className="text-sm text-gray-500 dark:text-cyan-50">{email}</p>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-600 mb-4 dark:text-cyan-50">
        Category: <span className="font-medium">{category}</span> |{" "}
        {publishedAt}
      </p>

      <pre className="bg-gray-100 p-4  dark:bg-cyan-600 rounded-md text-sm overflow-x-auto ">
        <code className='dark:text-cyan-50'>{content}</code>
      </pre>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className=" px-3 py-1 rounded-full text-xs font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};


export default DetailsMyArticle
