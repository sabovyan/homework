function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b).reverse();
  let counter = 0;
  for (let i = 0; i < statues.length - 1; i++) {
    const diff = statues[i] - statues[i + 1];
    if (diff > 1) {
      counter = counter + diff - 1;
    }
  }
  return counter;
}
makeArrayConsecutive2([6, 2, 3, 8]);
