import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import { Button, Card, Heading, Page, ResourceItem, ResourceList, TextContainer } from '@shopify/polaris';

const GET_CUSTOMERS = gql`
  query getCustomers {
    customers( first: 50 ) {
      edges {
        cursor
        node {
          id
          displayName
        }
      }
    }
  }
`;

const CustomerList = () => {
  return (
    <Page>
      <Card title="Customers">
        <Query query={GET_CUSTOMERS}>
          { ( resp ) => {
            const customers = resp?.data?.customers?.edges.map( edge => edge.node ) ?? [];
            if ( resp ) {
              return (
                <React.Fragment>
                  <ResourceList items={customers}
                                renderItem={ RenderCustomer }
                  ></ResourceList>
                  <Card.Section>
                    <Button url={`/static-route`}>Go to static component route</Button>
                  </Card.Section>
                </React.Fragment>
              )
            } else {
              return (
                <Card.Section>
                  <TextContainer>
                    <Heading>No customers</Heading>
                    <p>Add some orders and customers to see the dynamic routing working.</p>
                  </TextContainer>
                </Card.Section>
              )
            }
          }}
        </Query>
      </Card>
    </Page>
  )
}

const RenderCustomer = ( customer ) => {
  const customerId = Number( customer.id.split('/').pop() );
  return (
    <ResourceItem id={customerId}
                  url={`/customers/${customerId}`}
    >
      { customer.displayName }
    </ResourceItem>
  );
}

export default CustomerList;
