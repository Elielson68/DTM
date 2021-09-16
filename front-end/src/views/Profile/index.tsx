import React from "react";
import MenuBar from "../../components/MenuBar";

import { Container, Text } from "./styles";

const Profile: React.FC = () => (
  <>
    <MenuBar />
    <Container>
      <Text>Profile</Text>
    </Container>
  </>
);

export default Profile;
