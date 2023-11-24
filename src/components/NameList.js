import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Teddy",
      age: "34",
      skill: "React",
    },
    {
      id: 2,
      name: "Mar",
      age: "28",
      skill: "Angular",
    },
    {
      id: 3,
      name: "Emi",
      age: "9",
      skill: "HTML",
    },
    {
      id: 4,
      name: "Amen",
      age: "2",
      skill: "Css",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
