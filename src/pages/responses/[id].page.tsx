import { ResponseView } from "@/feature/responses/view/ui"
import dynamic from "next/dynamic"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
  ssr: false,
})

const ResponseViewPage = () => {
  return (
    <PrivateRoute>
      <ResponseView />
    </PrivateRoute>
  )
}

export default ResponseViewPage
