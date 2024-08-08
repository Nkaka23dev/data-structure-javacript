type Name = { name: string };
type Age = { age: number };

type UnionType = Name | Age;

type IntersectionType = Name & Age;

let unionValue: UnionType;
unionValue = { name: "Eric Nkaka", age: 34 };
unionValue = { name: "Eric Nkaka" };
unionValue = { age: 34 };

function filterValues(unionValue: UnionType) {
  if ("name" in unionValue) {
    unionValue.name;
  }
  if ("age" in unionValue) {
    unionValue.age;
  }
  if ("age" in unionValue && "name" in unionValue) {
    unionValue.age;
    unionValue.name;
  }
}
