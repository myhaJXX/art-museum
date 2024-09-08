type padding = 5 | 10 | 15| 20 | 40

export interface IButton {
    $id: number;
    $padding: [padding, padding];
    $active: boolean;
    $color?: string;
    $bgCol?: string;
}