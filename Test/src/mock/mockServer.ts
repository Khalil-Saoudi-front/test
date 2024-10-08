import { Children } from "react";
import { CategoryDataType } from "./CategoryDataType";
import Data from "./categories.json";
export interface NewFormData extends CategoryDataType {
  level?: number;
  children: Array<NewFormData>;
}
export const formatData = (
  data: Array<CategoryDataType>,
  level = 0
): Array<NewFormData> =>
  data.map((el) => {
    return {
      ...el,
      level,
      children: formatData(el.children, level + 1) 
    };
  });
export const fakeData = async (): Promise<Array<CategoryDataType>> => {
  const data = new Promise<Array<CategoryDataType>>((resolve, reject) => {
    setTimeout(() => {
      resolve(Data as Array<CategoryDataType>);
    }, 1000);
  });
  return data;
};
