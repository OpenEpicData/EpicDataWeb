import { Table, Popconfirm, Button } from 'antd';
import React from 'react';

const ProductList: React.FC<{ products: { name: string }[]; onDelete: (id: string) => void }> = ({
  onDelete,
  products,
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];
  return <Table dataSource={products} columns={columns} />;
};

export default ProductList;