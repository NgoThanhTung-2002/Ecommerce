export const convertPrice = (price) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");
    return `${result} VND`;
  } catch (error) {
    return null;
  }
};
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
