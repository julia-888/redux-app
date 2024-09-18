import React from "react";
import { Wrap } from "./Wraps";
import Table from "./Table";
import Nav from "./Nav";

const FirstPage = () => {
  return (
    <Wrap>
      <h1 className="raleway">Товары</h1>
      <Table />
      <Nav />
    </Wrap>
  );
};

export default FirstPage;
