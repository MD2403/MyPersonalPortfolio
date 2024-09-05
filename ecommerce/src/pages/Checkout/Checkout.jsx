import { useSearchParams } from 'react-router-dom'
import OrderSummary from '../../components/OrderSummary'


const Checkout = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get("orderid")
    
  return (
    <div>
      {/*Checkout Order Summary */}
      <OrderSummary orderId = {orderId}/>
    </div>
  )
}

export default Checkout
