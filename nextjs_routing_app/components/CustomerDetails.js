import { useRouter } from 'next/router';

const CustomerDetails = () => {
  const router = useRouter();
  const customerId = router.query;
  console.info( { customerId } )

  return (
    <h1>Customer: { customerId }</h1>
  )
}

export default CustomerDetails;
