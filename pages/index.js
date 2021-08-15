import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Octav Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Airbnb</h1> */}
      <Header/>
      {/* Banner */}
    </div>
  );
}
