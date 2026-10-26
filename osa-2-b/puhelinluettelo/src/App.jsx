import { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Person from "./components/person";
import Persons from "./components/persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "050 555 5555" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addNewName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(nameObject));
    setNewName("");
    setNewNumber("");
  };

  const filterToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filter={filter}
        handleFilterChange={(event) => setFilter(event.target.value)}
      />

      <PersonForm
        addNewName={addNewName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={(event) => setNewName(event.target.value)}
        handleNumberChange={(event) => setNewNumber(event.target.value)}
      />

      <h2>Numbers</h2>

      <Persons persons={filterToShow} />
    </div>
  );
};

export default App;
