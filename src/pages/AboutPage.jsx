import React from 'react'

function AboutPage() {
	return (
		<div className="h-auto p-6 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
				About This Project
			</h1>
<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">				The <strong>Ammar Yasser's Movie App</strong>, developed by <strong>Ammar Yasser</strong>,
				is a fully responsive web application that delivers an IMDb-like experience for
				movie and TV show lovers. Built with <strong>React.js</strong> it fetches real-time data from
				<strong> The Movie Database (TMDB) API</strong>.
			</p>
			<p className="text-lg leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
				Users can search for movies or TV shows, browse popular and trending titles, and
				view detailed information such as posters, release dates, ratings, and
				descriptions. The project is structured with reusable components like SearchBar,
				MovieCard, and MovieList, and uses React Router for seamless navigation between
				pages.
			</p>
			<p className="text-lg leading-relaxed mt-4 text-gray-600 dark:text-gray-300">
				Styled with <strong>tailwind CSS</strong>, the interface is fully responsive across
				devices. Bonus features include a Favorites list saved in localStorage, a loading
				spinner for better UX, and error handling for failed API requests. This project
				showcases React fundamentals, API integration, responsive design, and clean code
				organization.
			</p>
		</div>
	)
}

export default AboutPage
