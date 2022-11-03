import { styled } from "@linaria/react";
import Head from "next/head";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
      <StyledHeader />
    </>
  );
}
