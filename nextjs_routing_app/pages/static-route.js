import { Button, Card, Page } from '@shopify/polaris';

const StaticRoute = () => (
  <Page>
    <Card title="Just a static route">
      <Card.Section>
        <Button url={`/`} outline>Return to list</Button>
      </Card.Section>
    </Card>
  </Page>
)

export default StaticRoute;
