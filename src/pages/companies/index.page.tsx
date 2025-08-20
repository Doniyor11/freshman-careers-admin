import { CompaniesList } from "@/feature"
import dynamic from "next/dynamic"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
  ssr: false,
})

const MainPage = () => {
  return (
    <PrivateRoute>
      <CompaniesList />
    </PrivateRoute>
  )
}

export default MainPage
