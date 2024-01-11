export interface ReviewProps {
  id?: any;
  no: string | number;
  timestamp: string | number;
  content: string;
  width?: string | number;
  [prop: string]: any;
}

export interface AdminRoutersProps {
  [prop: string]: string;
}

export interface SearchObjectProps {
  value: string;
  filter: string;
  [prop: string]: string;
}
