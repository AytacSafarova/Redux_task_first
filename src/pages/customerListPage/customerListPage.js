import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";

function CustomerPage() {
  const dispatch = useDispatch();

  const add_customer = (e) => {
    dispatch({ type: "add_customer", payload: e });
    console.log(e);
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Contact title",
      dataIndex: "contactTitle",
    },
    {
      render: (text, record) => (
        <button onClick={() => add_customer(record)}>{"Add favorites"}</button>
      ),
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/customers")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      CusomerPage
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default CustomerPage;
