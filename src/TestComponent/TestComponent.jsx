import React from "react";

import {
  StyledDiv,
  StyledHeading,
  StyledDescription,
} from "./TestComponent.styles";

const TestComponent = ({ theme }) => {
  console.log("here");

  return (
    <StyledDiv data-testid="test-component" theme={theme}>
      TEST
      {/* <StyledHeading className="heading">I'm the test component</StyledHeading>
      <StyledDescription>Made with love by Harvey</StyledDescription> */}
    </StyledDiv>
  );
};
export default TestComponent;
