import { Link } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelte }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative max-w-sm mx-auto">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2  border-primary sm:hover:border-accent hover:no-underline focus:no-underline  rounded-md"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs dark:text-gray-600">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <div
          onClick={() => handleDelte(id)}
          className="bg-primary p-3 rounded-full hover:bg-secondary group cursor-pointer 
             absolute -right-0 bottom-1 
            sm:-right-2 sm:-top-2 sm:bottom-auto 
             z-10"
        >
          <MdDeleteForever
            size={20}
            className="text-accent group-hover:text-accent"
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
