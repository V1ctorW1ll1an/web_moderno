const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

// ele sumiu com a função soma, obj para json
console.log(JSON.stringify(obj));

// json para objeto
const json = '{"a": 1, "b": 2, "c": 3}';
console.log(JSON.parse(json));
