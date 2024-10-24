"use client"

import { Container } from "@/components/Global/GridContainer"
import { CardPostMd } from "../CardsPost/CardPostMd"
import { Button } from "@/components/Global/Button"
import { builder } from "@builder.io/sdk"
import { useEffect, useState } from "react"

async function fetchAllPosts() {
  const posts = await builder.getAll("blog-post", {
    limit: 10,
    options: {
      noCache: true,
    },
  })

  return posts
}

export function SimilarArticles() {
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
    <section className="pb-14 md:pb-28">
      <Container>
        <div className="text-center">
          <h3 className="font-nunito font-bold text-gray-950">
            Artigos semelhantes
          </h3>
        </div>
        <div className="flex flex-col w-fit mx-auto md:flex-row md:w-full md:mx-0 justify-center gap-14 md:gap-[84px] mt-16">
          {allPosts.slice(1, 4).map((post, index) => (
            <CardPostMd
              key={index}
              imagePrimary={post.data.imagePrimary}
              theme={post.data.postTheme}
              title={post.data.title}
              date={post.data.datePost}
              slug={post.data.slug}
            />
          ))}
        </div>
        <div className="mx-auto w-fit mt-20">
          <Button url="/" color="secondary" size="sm">
            Carregar mais
          </Button>
        </div>
      </Container>
    </section>
  )
}
