import React from "react";
import { Wrap } from "./Wraps";
import Table from "./Table";
import Nav from "./Nav";
import PaginationBar from "./PaginationBar";

const FirstPage = () => {
  return (
    <Wrap>
      <h1 className="raleway">Товары</h1>
      <Table />
      <PaginationBar />
      <Nav />
    </Wrap>
  );
};

export default FirstPage;
