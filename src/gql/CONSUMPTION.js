import { gql } from '@apollo/client';

const CONSUMPTION = gql`
  query CONSUMPTION {
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

export default CONSUMPTION;
