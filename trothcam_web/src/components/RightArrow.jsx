import React from "react";
import styled from "styled-components";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Right({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const [show, setShow] = React.useState(false);
  return show ? (
    <Button
      onClick={onClick}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {children}
    </Button>
  ) : (
    <Transparent
      onMouseEnter={() => {
        setShow(true);
      }}
    />
  );
}

const Transparent = styled.div`
  width: 10rem;
  position: absolute;
  z-index: 999;
  height: 50rem;
`;

const Button = styled.button`
  cursor: pointer;
  color: white;
  cursor: pointer;
`;

export function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    console.log(isLastItemVisible);
  return <Right disabled={isLastItemVisible} onClick={() => scrollNext()}>→</Right>;
}