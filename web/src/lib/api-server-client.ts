
import createClient from "openapi-fetch"
import type { paths } from "@/types/api.d.ts"

const api = createClient<paths>({ baseUrl: "https://localhost:8080", credentials: "include" });

export {
  api
}
