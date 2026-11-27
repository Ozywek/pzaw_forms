import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



  

function CharacterForm(){

  const [formData, setFormData] = useState({
    CharacterName: "",
    CharacterLevel: 0,
    CharacterDesc: "",
    CharacterRace:'',
    CharacterClass:''

  });

  function handleChange(event) {
    const {name, value} = event.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }






  return (
    <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        name = "CharacterName"
        onChange={handleChange}
        value ={formData.CharacterName}
        />
        <br />


        <input 
        type="number" 
        name = "CharacterLevel"
        min={1}
        max={100}  
        onChange={handleChange}
        value={formData.CharacterLevel}
        />
        <br /> 

        <input  
        type="textarea" 
        name="CharacterDesc"
        onChange={handleChange}
        value={formData.CharacterDesc}
        />
        <br />

        <select 
        name="CharacterRace"
        onChange={handleChange}
        value={formData.CharacterRace}
        >
          <option value="">--Please choose an option--</option>
          <option value="human">Człowiek</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Krasnolud</option>
          <option value="orc">Ork</option>
        </select>
        <br />


        <select 
        name="CharacterClass"
          onChange={handleChange}
        value={formData.CharacterRace}
        >
          <option value="">--Please choose an option--</option>
          <option value="warrior">Wojownik</option>
          <option value="wizard">Mag</option>
          <option value="archer">Łucznik</option>
        </select>
        <br />








{/* 



        



        <input 
        type="checkbox"
        name="CharacterPublic"
        />
        <br /> */}


      <input type="submit" name="subm" />
    </form>
  )
}


function App() {
  return (
    <CharacterForm />



  )
}

export default App
