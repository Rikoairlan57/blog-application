import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { FaTrash } from "react-icons/fa6";
import { BiSolidPencil } from "react-icons/bi";
import axios from "axios";
import { PUBLIC_API, PUBLIC_TOKEN } from "@/utils/config";

export const columns: ColumnsType<DataType> = [
  {
    title: "User ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    fixed: "right",
    width: 100,
    render: (param) => (
      <>
        <div className="flex justify-around">
          <Link href={`/user/${param.id}`}>
            <BiSolidPencil />
          </Link>
          <button
            onClick={async () => {
              try {
                const response = await axios.delete(
                  PUBLIC_API + "/public/v2/users/" + param.id,
                  {
                    headers: {
                      Authorization: "Bearer " + PUBLIC_TOKEN,
                    },
                  }
                );
                console.log("Delete success:", response);
              } catch (error) {
                console.error("Delete error:", error);
              }
            }}
          >
            <FaTrash />
          </button>
        </div>
      </>
    ),
  },
];

interface DataType {
  key: React.Key;
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
