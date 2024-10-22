"use client"

import { CardPostLg } from "@/components/Blog/CardsPost/CardPostLg"
import { CardPostMd } from "@/components/Blog/CardsPost/CardPostMd"
import { Search } from "@/components/Blog/Search/Search"
import { Button } from "@/components/Global/Button"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
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

export default function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const postsData = await fetchAllPosts()
      setPosts(postsData)
    }
    getData()
  }, [])

  if (posts.length === 0) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Header />
      <Search />
      <CardPostLg
        imagePrimary={posts[0].data.imagePrimary}
        theme={posts[0].data.postTheme}
        title={posts[0].data.title}
        date={posts[0].data.datePost}
        slug={posts[0].data.slug}
      />
      <div className="flex flex-col md:flex-row mx-auto md:mx-0 w-fit md:w-full justify-center gap-[84px]">
        {posts.slice(1).map((post, index) => (
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
      <div className="mt-20 mx-auto block w-fit pb-28">
        <Button url="/blog" color="secondary" size="sm">
          Carregar mais
        </Button>
      </div>
      <Footer />
    </>
  )
}
