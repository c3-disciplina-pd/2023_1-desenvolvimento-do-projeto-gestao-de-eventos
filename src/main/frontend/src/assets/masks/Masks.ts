const applyMask = (value: string | number, mask: string) => {
  if (!value) return "";
  let formattedValue = "";
  const unmaskedValue = String(value).replace(/\D+/g, "");
  let position = 0;

  for (let i = 0; i < mask.length; i++) {
    if (
      (mask[i] === "#" || mask[i] === "*") &&
      unmaskedValue[position] !== undefined
    ) {
      formattedValue += unmaskedValue[position++];
    } else if (unmaskedValue[position] !== undefined) {
      formattedValue += mask[i];
    }
  }

  return formattedValue;
};

export const Masks = {
  formatCPF: (value: string): string => applyMask(value, "***.***.***-**"),
  parseNumbers: (value: string): string => String(value).replace(/\D+/g, ''),
};
