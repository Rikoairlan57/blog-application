import { Table } from "antd";
import React from "react";

export const TableUser = ({ users, columns }: any) => {
  return (
    <div className="overflow-scroll">
      <Table dataSource={users} columns={columns} scroll={{ x: 1300 }} />
    </div>
  );
};
