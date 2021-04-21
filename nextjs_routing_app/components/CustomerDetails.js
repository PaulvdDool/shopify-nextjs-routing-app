import { useRouter } from 'next/router';

const CustomerDetails = () => {
  const router = useRouter();
  const customerId = router.query.customerId;

  return (
    <h1>Customer: { customerId }</h1>
  )
}

export default CustomerDetails;
