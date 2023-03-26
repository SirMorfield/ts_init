const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

;(async () => {
	while (1) {
		console.log('Hello World! v4')
		await sleep(1000)
	}
})()
