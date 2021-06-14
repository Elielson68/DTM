import React from "react";

import { MyTable } from "../../components/dashboard";

import { Container } from "./styles";

const Dashboard: React.FC = () => (
    <Container>
      <MyTable />
      {/* <MyTable rows={[{
        id: '1', name: 'bob', age: 18, email: 'bob@bob.com'
      }]}/> */}
    </Container>
);

export default Dashboard;
