test('Devo conhecer as principais assertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();

  number = 10;
  expect(number).not.toBeNull();
});

test('Devo saber trabalhar com objetos', () => {
    const obj = {name : 'Chico', email : 'aaa@bbb.ccc'}
    expect(obj).toHaveProperty('name')

})