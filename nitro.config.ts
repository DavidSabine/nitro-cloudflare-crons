//https://nitro.unjs.io/config
export default defineNitroConfig({
	srcDir: 'server',
	experimental: {
		tasks: true,
	},
	scheduledTasks: {
		'0 12 * * *': ['my-task'],
	},
	preset: 'cloudflare-module',
})
