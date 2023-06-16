import { useState } from "react";
import { CRUDNavigator, CRUDOption } from "./CRUDNavigator";
import { Table, Button } from "antd";
import { BsPencilSquare } from "react-icons/bs";
// eslint-disable-next-line react-refresh/only-export-components
export default function TABLE(props: {
  data: Array<any>;
  columns: Array<{
    title: string;
    dataIndex: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key: any;
  }>;
}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const { data, columns } = props;

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  if (columns.filter((i) => i.dataIndex === "buttons").length !== 1) {
    columns.push({
      title: "",
      dataIndex: "buttons",
      key: "buttons",
    });
  }

  return (
    <div>
      <Table
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data.map((i, index) => ({
          key: index + 1,
          ...i,
          image: <></>,
          ...data,
          buttons: (
            <Button
              onClick={() => console.log(CRUDOption("Update", i._id))}
              style={{
                padding: "20px 15px",
                fontSize: "18px",
                color: "orange",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "orange",
              }}
            >
              <BsPencilSquare />
            </Button>
          ),
        }))}
        columns={columns}
      />
    </div>
  );
}
