export function filterTransactions(data, filters) {
  return data.filter((tx) => {
    const matchesSearch =
      tx.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      tx.category.toLowerCase().includes(filters.search.toLowerCase());

    const matchesType =
      filters.type === "all" || tx.type === filters.type;

    const matchesCategory =
      filters.category === "all" || tx.category === filters.category;

    const matchesDate =
      (!filters.fromDate || tx.date >= filters.fromDate) &&
      (!filters.toDate || tx.date <= filters.toDate);

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesDate
    );
  });
}