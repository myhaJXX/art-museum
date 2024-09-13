type TProps = string | null
const missingText = (str: TProps, key:TProps):string => str ? str : `${key} is missing...`
module.exports = missingText