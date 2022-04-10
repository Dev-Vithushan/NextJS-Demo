import { useRouter } from "next/router"

export default function ProductID() {
    const router = useRouter()
    const productID  = router.query.productID
    return (
      <div>
        <h1> This is the {productID} </h1>
      </div>
    )
  }