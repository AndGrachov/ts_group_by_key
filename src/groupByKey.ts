type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};
  const uniqueValues: any[] = [];

  for (const item of items) {
    const value = item[key];

    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  uniqueValues.forEach((value) => {
    result[value] = items.filter((item: T) => item[key] === value);
  });

  return result;
}
