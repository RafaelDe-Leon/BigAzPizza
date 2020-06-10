import React from 'react';

import { Col, Row, Container } from '../Grid';

export default function PizzaInfo({ quantity, size, type }) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col size='12'>
            {/* Render of table with data */}
            <div className='container '>
              <div className='row '>
                <table className='table table-hover'>
                  <tbody>
                    <tr>
                      <th scope='row'>
                        Quantity:
                        <td className=''>{quantity}</td>
                      </th>
                      <th scope='row'>
                        Type:
                        <td className=''>{type}</td>
                      </th>
                      {/* {''} */}
                      <th scope='row'>
                        Size:
                        <td>{size}</td>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
