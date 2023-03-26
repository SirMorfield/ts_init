const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

;(async () => {
	while (1) {
		console.log('Hello World! v3')
		await sleep(1000)
	}
})()
