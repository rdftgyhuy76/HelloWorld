function countWords(str) {
  return str.split(" ").filter((word) => word !== "").length;
}
