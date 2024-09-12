type TPadding = 5 | 10 | 15 | 20 | 40;

export interface IButton {
  $id: number;
  $padding: [TPadding, TPadding];
  $active: boolean;
  $color?: string;
  $bgCol?: string;
  $display?: boolean
}
