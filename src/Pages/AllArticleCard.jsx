import { use } from "react"

const AllArticleCard = ({articlesPromise}) => {
    const article=use(articlesPromise)
    console.log(article)
  return (
    <div>
        {article.length}
    </div>
  )
}

export default AllArticleCard
