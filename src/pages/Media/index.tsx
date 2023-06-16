<<<<<<< HEAD
import { Button, Table } from "antd";
import { useGetData } from "../../utils/hooks/useGet";
import styles from "./index.module.scss";
import { BsFillTrashFill } from "react-icons/bs";
export default function Media() {
  const { data, isSuccess } = useGetData("/media", ["media"]);

  const columns = [
    { title: "Title uz", dataIndex: "title_uz", key: "title_uz" },
    { title: "Title en", dataIndex: "title_en", key: "title_en" },
    { title: "Frame", dataIndex: "frame", key: "frame" },
    {
      title: "",
      dataIndex: "buttons",
      key: "buttons",
    },
  ];

  return isSuccess ? (
    <div className={styles.Main}>
      <div className={styles.container}>
        <div className={styles.Table}>
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== "Not Expandable",
            }}
            dataSource={data.data.map((item: any, index: any) => ({
              ...columns,
              buttons: (
                <div>
                  <Button
                    onClick={() => console.log(item._id)}
                    style={{
                      padding: "20px 15px",
                      fontSize: "18px",
                      color: "red",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "red",
                    }}
                  >
                    <BsFillTrashFill />
                  </Button>
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </div>
  ) : (
    <h1>loading...</h1>
=======
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Media() {
  let { t } = useTranslation();

  return (
    <div className="media-page">
        <h1>
          {t("Media")}
        </h1>
    </div>
>>>>>>> 2ac185341e73456065c94ee2d8aaf058fc5577e9
  );
}
