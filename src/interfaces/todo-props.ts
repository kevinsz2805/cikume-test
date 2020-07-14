export interface TodoProps {
  data: Array<ItemsProps>;
  onChange: (e: any, item: ItemsProps) => void;
}

export interface ItemsProps {
  id: number;
  text: string;
  done: boolean;
}
