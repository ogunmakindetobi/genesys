function changeOrder(container, strArray) {
  var orderTags = strArray.sort();
  var boxElement = document.getElementById(container);
  orderTags.forEach((data) =>
    boxElement.prepend(document.getElementById(data))
  );
}
