import React from "react";

export type childrenType = {
  children: React.ReactNode | string;
  className?: string;
};

export type MessagesType = {
  key: string;
  type: string;
  id: number;
  tagNumber: string;
  timestamp: string;
};
