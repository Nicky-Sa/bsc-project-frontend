export type chartPropsType<T> = {
  data: T[];
  fields: string[];
  color: string[];
  unit: string;
  height?: number
};
