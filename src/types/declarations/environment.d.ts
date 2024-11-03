// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface ProcessEnv extends NodeJS.ProcessEnv {

		/**
		 * Discord Webhook URL
		 *
		 * @description URL for the Discord Webhook
		 */

		WEBHOOK_URL: string;

		/**
		 * GitHub Personal Access Token (PAT)
		 *
		 * @description Token used for fetching repositories
		 */
		GITHUB_PAT: string;
	}
}
