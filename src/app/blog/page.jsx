import Image from "next/image";
import Link from "next/link";

const BlogsSection = async () => {
  const res = await fetch("https://portfolio-server-rho-gold.vercel.app/api/v1/blogs", {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();
  return (
    <div className="w-full dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white dark:text-white sm:text-4xl">
            My Blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-white dark:text-gray-300">
            Dive into the latest in technology with our insightful blog posts.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {blogs?.data?.map((blog) => (
            <article
              key={blog._id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                width={400}
                height={400}
                src={blog.image}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time datetime="2023-10-11" className="mr-8">
                  {new Date(blog.time).toLocaleDateString()}
                </time>
                {/* <div className="-ml-4 flex items-center gap-x-4"><svg viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx="1" cy="1" r="1"></circle>
                  </svg>
                  <div className="flex gap-x-2.5">
                      <Image width={400} height={400} src="https://randomuser.me/api/portraits/men/2.jpg" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10"/>John
                  </div>
              </div> */}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href="/">
                  {" "}
                  <div dangerouslySetInnerHTML={{ __html: blog.title }}></div>
                </Link>
              </h3>
              <div className="flex justify-center mt-2">
                <Link
                  href={`/blog/${blog._id}`}
                  className="px-4 inline-block py-2 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  Show More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
