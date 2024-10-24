"use client"

import { Container } from "@/components/Global/GridContainer"
import { TextTag } from "@/components/Homepage/TextTag"
import { CardPostDefault } from "../../Blog/CardsPost/CardPostDefault"
import { CardPostSM } from "../../Blog/CardsPost/CardPostSM"
import { Button } from "@/components/Global/Button"
import { builder } from "@builder.io/sdk"
import { useEffect, useState } from "react"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

async function fetchAllPosts() {
  const posts = await builder.getAll("blog-post", {
    limit: 10,
    options: {
      noCache: true,
    },
  })

  return posts
}

export function BlogSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allPosts, setAllPosts] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const postsData = await fetchAllPosts()
      setAllPosts(postsData)
    }
    getData()
  }, [])

  if (allPosts.length === 0) {
    return <div>Carregando...</div>
  }

  return (
    <section className="py-14 lg:py-28">
      <Container>
        <div className="flex items-end justify-between max-w-4xl">
          <div className="space-y-6">
            <TextTag className="text-orange">BLOG</TextTag>
            <h2 className="text-gray-950 font-nunito font-semibold">
              Em destaque
            </h2>
          </div>
          <div className="hidden lg:block">
            <h4 className="leading-7 font-nunito text-gray-950 font-semibold">
              Recentes
            </h4>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:gap-[104px] gap-14">
          <CardPostDefault
            imagePrimary={allPosts[0].data.imagePrimary}
            theme={allPosts[0].data.postTheme}
            title={allPosts[0].data.title}
            date={allPosts[0].data.datePost}
            slug={allPosts[0].data.slug}
          />
          <div className="flex flex-col mx-auto lg:mx-0 gap-[30px]">
            <h4 className="leading-7 lg:hidden font-nunito text-gray-950 font-semibold">
              Recentes
            </h4>
            {allPosts.slice(1).map((post, index) => (
              <CardPostSM
                key={index}
                imagePrimary={post.data.imagePrimary}
                theme={post.data.postTheme}
                title={post.data.title}
                date={post.data.datePost}
                slug={post.data.slug}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 lg:mt-20 block w-fit">
          <Button url="/blog" color="secondary" size="sm">
            Mais publicações
          </Button>
        </div>
      </Container>
    </section>
  )
}
