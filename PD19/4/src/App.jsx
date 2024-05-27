import { useState } from 'react'
import './App.css'

const users = [
  { firstName: "Jonas", id: 1 },
  { firstName: "Petras", id: 2 },
  { firstName: "Balvonas", id: 3 },
  { firstName: "Egidijus", id: 4 },
  { firstName: "Mykolas", id: 5 },
  { firstName: "Simas", id: 6 },
  { firstName: "Nedas", id: 7 },
  { firstName: "Povilas", id: 8 },
  { firstName: "Deividas", id: 9 },
  { firstName: "Domas", id: 10 }
]

function App() {
  const [searchItem, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      <ul>
        {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
      </ul>
    </>
  )
}

export default App