import React from 'react'

import Admin from './Admin'
import { database } from 'framz'

export default App => props => {
	const models = database.getModelsInfo(App)

	return (
		<Admin {...props} models={models}/>
	)
}
