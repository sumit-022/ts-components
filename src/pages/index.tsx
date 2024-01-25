import React from "react";
import Table, { ColumnConfig, RowConfig } from "@/components/atoms/table/one";

export default function Home() {
  const columns: ColumnConfig[] = [
    {
      title: "Name",
      value: "name",
      type: "text",
      align: "left",
      headerAlign: "left",
      width: 100,
    },
    {
      title: "Age",
      value: "age",
      type: "number",
      align: "center",
      headerAlign: "center",
      width: 100,
    },
    {
      title: "Address",
      value: "address",
      type: "text",
      align: "center",
      headerAlign: "center",
      width: 300,
    },
  ];
  const rows: RowConfig[] = [
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
    {
      name: "John",
      age: 30,
      address: "New York No. 1 Lake Park",
    },
  ];
  return <Table columns={columns} rows={rows} checkboxSelection={true} />;
}
