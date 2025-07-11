import { useEffect, useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import { Layout } from "antd";
import headerStyle from "./HeadersStyle";

const { Header } = Layout;

export const Proverka = () => {
  const [date, setDate] = useState(null);
  useEffect(() => {
    setDate(formatDate(new Date()));
  }, []);

  return <Header style={headerStyle}>header</Header>;
};
