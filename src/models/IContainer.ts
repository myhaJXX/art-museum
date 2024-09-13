type TDisplay = 'flex' | 'grid';
type TJuC =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type TAlI =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type TGap = '5px' | '10px' | '15px' | '20px' | '30px';
type TWrap = 'wrap' | 'nowrap' | 'wrap-reverse;';

export interface IContainer {
  $display?: TDisplay;
  $justifyc?: TJuC;
  $justifycA?: TJuC;
  $justifyi?: string;
  $aligni?: TAlI;
  $gap?: TGap;
  $wrap?: TWrap;
}
