"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { builder } from "@builder.io/react"
import Image from "next/image"
import { TagCalendar } from "@/components/Blog/TagCalendar"
import { Container } from "@/components/Global/GridContainer"
import { Header } from "@/components/Global/Header/Header"
import { Footer } from "@/components/Global/Footer/Footer"
import { SimilarArticles } from "@/components/Blog/Post/SimilarArticles"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

async function fetchPost(slug: string) {
  const post = await builder.get("blog-post", {
    query: { "data.slug": slug },
  })
  return post ? post.data : null
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const post = await fetchPost(params.slug)
      if (!post) {
        router.push("/404")
      } else {
        setPost(post)
        setLoading(false)
      }
    }
    getData()
  }, [params.slug, router])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!post) {
    return <div>Post não encontrado.</div>
  }

  return (
    <>
      <Header />
      <section className="py-14 md:py-28">
        <Container>
          <div className="text-center">
            <div className="mx-auto w-fit">
              <TagCalendar date={post.datePost} />
            </div>
            <h2 className="font-nunito text-gray-950 font-semibold mt-8 text-3xl md:text-[40px] md:mt-14 max-w-[904px] mx-auto">
              {post.title}
            </h2>
            <div className="flex items-center mx-auto w-fit gap-6 mt-6 md:mt-12">
              <span className="font-inter text-base font-medium text-gray-900">
                {post.postTheme}
              </span>
              <div className="w-2 h-2 bg-gray-700 rounded-[50%]"></div>
              <span className="font-inter text-base font-medium text-gray-900">
                {post.timeRead}
              </span>
            </div>
          </div>
          {post.imagePrimary && (
            <Image
              className="mt-14 h-[30vh] object-cover rounded-lg"
              src={post.imagePrimary}
              width={1216}
              height={352}
              alt="Imagem do post do blog"
            />
          )}

          <div className="flex flex-col items-start ml-0 lg:ml-52">
            <h4 className="font-nunito font-semibold text-gray-950 mt-14 lg:mt-24 max-w-[747px]">
              {post.heading}
            </h4>
            <div className="space-y-8 mt-6 font-inter text-base leading-6 text-gray-950 opacity-80 w-full max-w-[100%] lg:max-w-[800px]">
              <div
                className="break-words text-wrap"  
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </Container>
      </section>
      <SimilarArticles />
      <Footer />
    </>
  )
}
