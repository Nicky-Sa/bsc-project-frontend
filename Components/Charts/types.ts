export type multiColumnChartType = {
  data: {
    month: string;
    tagNumber: string;
    value: number;
  }[];
};


export type pieChartType = {
  data: {
    type: string;
    title: string;
    value: number;
  }[];
};



export type chartPropsType<T> = {
  data: T[];
  fields: string[];
  color: string[];
  unit: string
};
