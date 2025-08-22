export default defineTask({
	meta: {
		name: "my-task",
		description: "A task to call an API endpoint",
	},
  run({ payload, context }) {
    console.log("Running my task...");
  try {
      const response = await $fetch('https://betterteamsacademy-nuxt4.david-f2e.workers.dev/api/auto-mailer', {
        method: 'POST'
      });
      console.log("API response:", response);
      return { result: "Success", response };
    } catch (error) {
      console.error("API call failed:", error);
      return { result: "Error", error: error.message };
    }
  },
});
