import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogDetails = async ({ params }) => {
  const { blogId } = params;
  const res = await fetch(`https://portfolio-server-rho-gold.vercel.app/api/v1/blogs/${blogId}`);
  const blog = await res.json();
  return (
    <div className="mb-5">
      <div className="flex justify-center mt-5">
        <Image
          src={blog?.data.image}
          width={700}
          height={700}
          alt="main-image"
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
              <div dangerouslySetInnerHTML={{ __html: blog?.data.title }}></div>
            </h1>
            <div className="flex gap-4">
              <h1 className="text-2xl">Category:</h1>
              <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                <div
                  dangerouslySetInnerHTML={{ __html: blog?.data.category }}
                ></div>
              </h1>
            </div>
            <p className="text-gray-700 text-xs mt-2">
              Written By:
              <Link
                href="#"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Sohag Islam
              </Link>
            </p>
            <h1 className="mt-10">
              {new Date(blog.data.time).toLocaleDateString()}
            </h1>

            {
              <div
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: blog?.data.content }}
              ></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
