const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

while (1) {
	console.log('Hello World! v3')
	sleep(1000)
}
