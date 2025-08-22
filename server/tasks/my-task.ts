export default defineTask({
	meta: {
		name: 'my-task',
		description: 'A task to call an API endpoint',
	},
	async run({ payload, context }) {
		console.log('Running my task...')

		try {
			const response = await $fetch(
				'https://betterteamsacademy-nuxt4.david-f2e.workers.dev/api/auto-mailer',
				{
					method: 'POST',
				}
			)
			console.log('API response (HTTP 200):', response)
			return { result: 'Success', status: 200, response }
		} catch (error) {
			const status = error.response?.status || 'Unknown'
			console.error(`API call failed with status ${status}:`, error.message)
			return { result: 'Error', status, error: error.message }
		}
	},
})
