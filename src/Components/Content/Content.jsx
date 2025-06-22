import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholderImage from "../../assets/404.jpg";


const Content = () => {

    const blog = useLoaderData();

    const { cover_image, title, description, published_at,tags,body_html } = blog

    return (
        <div
      
      className=" mx-auto group border p-2"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholderImage}
      />
      {/* tags */}
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
          {tags.map(tag =>(
            <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-accent dark:text-white"
          >
            #{tag}
          </a>
          ) )}
          
        </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        
         <div
    className="prose"
    dangerouslySetInnerHTML={{ __html: body_html }}
  />
      </div>
    </div>
    );
};

export default Content;