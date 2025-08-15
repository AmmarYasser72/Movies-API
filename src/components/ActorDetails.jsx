import React from 'react'

import TitleOverview from './TitleOverview'
import Card from './Card'
import Loader from './Loader'


function ActorDetails({ actor, loading, onClose }) {
	return (
		<div className="fixed w-screen h-screen z-40 px-4 py-16 overflow-auto bg-black bg-opacity-75">
			{loading && <Loader />}
			{!loading &&
				<div className="relative p-2 w-full max-w-3xl m-auto flex flex-col sm:flex-row rounded-2xl bg-light-800 text-dark-50 dark:(bg-dark-500 text-light-800)">
					<span 
						className="absolute opacity-50 hover:opacity-100 p-0.5 m-2 z-50 bg-true-gray-400 dark:bg-dark-50 rounded-2xl right-0 top-0" 
						onClick={onClose}
					>
						<svg className="h-10 w-10 fill-current text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title></svg>
					</span>
					
					<div className="w-auto h-full sm:w-80">
	    			<Card image={actor.data.profile_path} />
					</div>

					<div className="flex-1 p-2">
						<h3 className="text-xl font-bold">{actor.data.name}</h3>


						<TitleOverview text={actor.data.biography} limit={500} />


					</div>
				</div>
			}
		</div>
	)
}


export default ActorDetails