export interface CategoryDataType {
  id: number;
  name: string;
  count?: number;
  children: Array<CategoryDataType>
}
