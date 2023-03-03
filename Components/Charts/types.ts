export type multiColumnChartType = {
  data: {
    dateTime: string;
    tagId: string;
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
  unit: string;
  height?: number
};
