export const dataFilter = (data, queryField, param) => {
  return data.filter((dataItem) => {
    const item = dataItem[queryField];

    if (Array.isArray(item)) {
      const regex = new RegExp(item.join('|'), 'i');

      if (Array.isArray(param)) {
        return param.every((paramItem) => regex.test(paramItem));
      }

      return regex.test(param);
    }

    return item.includes(param);
  });
};
