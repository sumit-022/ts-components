import React, { useState } from "react";
import clsx from "clsx";
import Checkbox from "../input/checkbox";

export type ColumnConfig = {
  type: "text" | "number" | "date" | "datetime" | "time" | "currency";
  value: string;
  title: string;
  decoration?: string;
  width?: number | string;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
  sort?: "asc" | "desc";
  render?: (value: any) => React.ReactNode;
};

export type RowConfig = {
  [key: string]: any;
  decoration?: string;
  align?: "left" | "center" | "right";
  render?: (value: any) => React.ReactNode;
};

interface TableProps {
  columns: ColumnConfig[];
  rows: RowConfig[];
  tableDecoration?: string;
  cellDecoration?: string;
  checkboxSelection?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  checkboxSelection,
  rows,
  tableDecoration,
  cellDecoration,
}) => {
  return (
    <table
      className={clsx(
        "border border-black border-separate border-spacing-0 rounded-t-md shadow-xl",
        tableDecoration
      )}
    >
      <thead className="bg-pink text-white">
        <tr className="">
          {checkboxSelection && (
            <th className="p-4 border-r">
              <Checkbox />
            </th>
          )}
          {columns.map((column, index) => (
            <th
              key={index}
              className={clsx("p-2 capitalize border-r", column.decoration)}
              style={{
                width: column.width,
                textAlign: column.headerAlign,
              }}
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-orange" : "bg-yellow"}
          >
            {checkboxSelection && (
              <td className="p-4 border-r">
                <Checkbox />
              </td>
            )}
            {columns.map((column, index) => (
              <td
                key={index}
                className={clsx("p-2 border-r", cellDecoration)}
                style={{ textAlign: column.align }}
              >
                {column.render
                  ? column.render(row[column.title])
                  : row[column.value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
