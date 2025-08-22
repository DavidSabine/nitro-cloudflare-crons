export default {
	async fetch() {
		return new Response('OK', { status: 200 })
	},
	async scheduled() {
		console.log('Processing cron job…')
		const response = await fetch('https://betterteamsacademy-nuxt4.david-f2e.workers.dev/api/scheduled-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		console.log(data)
		return data
	},
}
