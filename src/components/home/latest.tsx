import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'
import ArticleCardMediumSkeleton from '../shared/article-card/article-card-medium-skeleton'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()

	return (
		<section className='relative bg-white py-24 sm:py-32 overflow-hidden'>
			{/* Subtle geometric background */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100 to-gray-50'></div>
				<div className='absolute top-20 right-20 w-64 h-64 border border-gray-200 rounded-full'></div>
				<div className='absolute bottom-32 left-32 w-48 h-48 border border-gray-200 rounded-full'></div>
				<div className='absolute top-1/2 left-1/4 w-32 h-32 border border-gray-200 rounded-full'></div>
			</div>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						From the blog
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Stay up-to-date with our latest publications.
					</p>
				</div>
				<div className='mt-16 grid gap-x-8 gap-y-16 lg:grid-cols-2'>
					{isLoading ? (
						<>
							<ArticleCardMediumSkeleton />
							<ArticleCardMediumSkeleton />
							<ArticleCardMediumSkeleton />
							<ArticleCardMediumSkeleton />
						</>
					) : (
						articles
							?.slice(3, 7)
							.map(article => (
								<ArticleCardMedium key={article.id} article={article} />
							))
					)}
				</div>
			</div>
		</section>
	)
}
