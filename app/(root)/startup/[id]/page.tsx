/* eslint-disable @next/next/no-img-element */
import { DateTimeFormater } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownit from "markdown-it";
import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
export const experimental_ppr = true;

const Startup = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const md = markdownit();

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  const parsedcontent = md.render(post?.pitch || "");

  return (
    <>
      <section className="pink_container  !min-h-[230px] ">
        <p className="tag"> {DateTimeFormater(post?._createdAt)} </p>
        <h1 className="heading"> {post?.title} </h1>
        <p className="sub-heading"> {post?.description} </p>
      </section>
      <section className="section_container">
        <img
          src={post?.image}
          alt="Image"
          className="w-full max-h-[25rem] rounded-xl object-cover"
        />

        <div className=" space-y-5 mx-auto mt-10 max-w-4xl ">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className=" flex gap-2 items-center mb-3 "
            >
              <Image
                height={64}
                width={64}
                src={post.author?.image}
                alt="Avatar"
                className="rounded-full drop-shadow-lg "
              />
              <div>
                <p className=" text-20-medium "> {post.author?.name} </p>
                <p className=" text-16-medium  !text-black-300 ">
                  {" "}
                  {post.author?.username}{" "}
                </p>
              </div>
            </Link>
            <p className="category-tag"> {post.category} </p>
          </div>

          <h3 className="text-30-bold"> Pitch Details </h3>
          {parsedcontent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all "
              dangerouslySetInnerHTML={{ __html: parsedcontent }}
            />
          ) : (
            <p className="no-result"> No details Provided </p>
          )}
        </div>
        <hr className="divider" />

        {/* // TODO: Recommended Editors Pick */}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id = {id}/>
        </Suspense>
      </section>
    </>
  );
};

export default Startup;
