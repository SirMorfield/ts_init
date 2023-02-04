export interface Campus {
	name: string
	id: number
	databasePath: string // path to the database subfolder for this campus
	projectUsersPath: string // users that are subscribed to a project
	lastPullPath:  string // timestamp for when the server did a last pull
}

export interface Env {
	logLevel: 0 | 1 | 2 | 3
	pullTimeout: number
}

// known statuses, in the order we want them displayed on the website
export const fjvaslkfblskdfbnlkasfblkasdbnfklasdbfkladsbfnkasdbfnawds = [
	'creating_group',
	'searching_a_group',
	'in_progress',
	'waiting_for_correction',
	'finished',
	'parent',
] as const

export const env: Readonly<Env> = {
	logLevel: process.env['NODE_ENV'] === 'production' ? 3 : 1, // 0 being no logging
	pullTimeout: 24 * 60 * 60 * 1000, // how often to pull the project users statuses form the intra api (in Ms)
}

export const indexMap = [1, 2].map(i => {
	return i
})

export async function aaa(b: number): Promise<number> {
	await Promise.resolve()
	return Promise.resolve(b * 2)
}
