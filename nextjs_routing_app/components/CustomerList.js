import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Card, Page, ResourceItem, ResourceList} from '@shopify/polaris';

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
          { ( resp, loading, error ) => {
            const customers = resp?.data?.customers?.edges.map( edge => edge.node ) ?? [];
            return (
              <ResourceList items={customers}
                            renderItem={ RenderCustomer }
              ></ResourceList>
            )
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
