export default function specialParam(object) {
  const specialArray = [];
  object.special.forEach((special) => {
    // const copy - убрал ошибку ESLint "Assignment to property of function parameter"
    const copy = { ...special };
    if (!Object.prototype.hasOwnProperty.call(copy, 'description')) {
      copy.description = 'Описание недоступно';
    }
    specialArray.push(copy);
  });
  return specialArray;
}
