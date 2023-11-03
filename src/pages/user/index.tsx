import { Meta } from "@/components/meta";
import { DefaultLayout } from "../layout";
import { columns } from "@/store/userColumn";
import { PUBLIC_API } from "@/utils/config";
import axios from "axios";
import { CustomNextPage } from "next";
import React, { useEffect, useState } from "react";
import { TableUser } from "@/components/user/tableUser";
import ModalUser from "@/components/ui/modal";

const User: CustomNextPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          PUBLIC_API + "/public/v2/users?page=1&per_page=100"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Meta title="User" desc="Synapsis Blog" keyword="Synapsis, Blog" />
      {/* <button className="bg-black text-white p-3 m-4 rounded-md hover:bg-slate-600">
        Add User
      </button> */}
      <ModalUser />
      <div className="px-5 max-w-7xl mx-auto flex gap-5 md:flex-row flex-col">
        <TableUser users={users} columns={columns} />
      </div>
    </>
  );
};

User.getLayout = DefaultLayout;

export default User;
