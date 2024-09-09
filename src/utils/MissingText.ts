type TProps = string | null
export const missingText = (str: TProps, key:TProps):string => str ? str : `${key} is missing...`