import { database, aclManager } from 'framz'
import _ from 'underscore'

export default () => {
	console.log('AD IN', Object.keys(database.models))
	_.each(Object.keys(database.models), modelName => {
		console.log(`ROLE_${modelName.toUpperCase()}_LIST`)
		aclManager.addRole(`ROLE_${modelName.toUpperCase()}_LIST`, 'ROLE_SUPER_ADMIN')
	})

	console.log(aclManager.pool)
}
