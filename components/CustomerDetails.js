import { useRouter } from 'next/router';
import { Button, Card, DisplayText, Page } from '@shopify/polaris';

const CustomerDetails = () => {
  const router = useRouter();
  const customerId = router.query.customerId;

  return (
    <Page>
      <Card title="Customer details">
        <Card.Section>
          <DisplayText size="extraLarge">Customer: { customerId }</DisplayText>
        </Card.Section>
        <Card.Section>
          <Button url={`/`} outline>Return to list</Button>
        </Card.Section>
      </Card>
    </Page>
  )
}

export default CustomerDetails;
