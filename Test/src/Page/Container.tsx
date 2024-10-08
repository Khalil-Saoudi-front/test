import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { fakeData, formatData, NewFormData } from "../mock/mockServer";
import List from "../component/List";

const Container = () => {
  const { isLoading, data } = useQuery({
    queryFn: () => fakeData(),
    queryKey: ["categories"],
  });
  const dataToShow: Array<NewFormData> = useMemo(() => {
    if (!data) return [];
    return formatData(data);
  }, [data]);

  if (isLoading) return <div>Is Loading</div>;
  return (
    <div className="container">
      {dataToShow.map((el) => (
        <List key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Container;
