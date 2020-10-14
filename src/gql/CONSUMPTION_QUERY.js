import { gql } from '@apollo/client';

const CONSUMPTION_QUERY = gql`
  query CONSUMPTION_QUERY {
    viewer {
      homes {
        consumption(resolution: DAILY, last: 100) {
          nodes {
            from
            to
            cost
            unitPrice
            unitPriceVAT
            consumption
            consumptionUnit
          }
        }
      }
    }
  }
`;

export default CONSUMPTION_QUERY;
