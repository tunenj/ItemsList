import List from './List'

import './App.css'

function App() {

  const fruits = [{id: 1, name: "orange", calories: 57}, 
                 {id: 2, name: "pineapple", calories: 89},
                 {id: 3, name: "coconut", calories: 90}, 
                 {id: 4, name: "apple", calories: 106}];

  const vegetables = [{id: 5, name: "potatoe", calories: 110},
                      {id: 6, name: "calery", calories: 15},
                      {id: 7, name: "corn", calories: 46},
                      {id: 8, name: "corn", calories: 39}]



  return(
  <>
     <List  items={fruits} category="Fruits"/>
     <List  items={vegetables} category="Vegetables"/>
  </>
)
}

export default App
