import React, { useState } from "react";
import { Modal, Input, Form, Select } from "antd";
import axios from "axios";
import { PUBLIC_API, PUBLIC_TOKEN } from "@/utils/config";

const { Option } = Select;

const onFinish = (values: any) => {
  axios
    .post(PUBLIC_API + "/public/v2/users", values, {
      headers: {
        Authorization: "Bearer " + PUBLIC_TOKEN,
      },
    })
    .then((res) => {
      console.log("add sucsees:", res);
    })
    .catch((err) => {
      console.log("add error:", err);
    });
};

const ModalUser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        break;
      case "female":
        break;
      default:
    }
  };

  const onUserActive = (value: string) => {
    switch (value) {
      case "Active":
        break;
      case "InActive":
        break;
      default:
    }
  };

  return (
    <>
      <button
        className="bg-black text-white p-3 m-4 rounded-md hover:bg-slate-600"
        onClick={showModal}
      >
        Open Modal
      </button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item<FieldType>
          label="Name"
          name="nama"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please input your gender!" }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please input your status!" }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onUserActive}
            allowClear
          >
            <Option value="male">Active</Option>
            <Option value="female">InActive</Option>
          </Select>
        </Form.Item>
      </Modal>
    </>
  );
};

type FieldType = {
  nama?: string;
  email?: string;
  gender?: string;
  status?: string;
};

export default ModalUser;
