import { createBrowserHistory } from "history"

export const routeHistory =
	typeof window !== "undefined" ? createBrowserHistory() : null
