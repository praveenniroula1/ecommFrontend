import React from "react";
import Layout from "../Components/Layout/Layout";
import { useAuth } from "../ContextAPi/Auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1>This is Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
