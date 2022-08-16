import React, {useState} from 'react';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import countries from '../Assets/countries';
import languages from '../Assets/languages';

function SearchBox({setCountry, setLanguage, selectCountry,selectLanguage}) {
  //state value for input form
  const [searchCountry, setSearchCountry] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');

  //search function filter for country input form
  const filteredCountries = countries.filter(country=> {
    return (
      country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
      country.code.toLowerCase().includes(searchCountry.toLowerCase())
    );
  })

  //search function filter for language input form
  const filteredLanguages = languages.filter(language=> {
    return language.toLowerCase().includes(searchLanguage.toLowerCase());
  })

  //dynamic state filter and reset its value after click/enter choice in the list
  const onSelectCountry = data => {
    setCountry(data);
    setSearchCountry('');
  }
  const onSelectLanguage = data => {
    setLanguage(data);
    setSearchLanguage('');
  }

  return (
    <div className="row">
      <div className='column'>
        <DropdownButton
          title={selectCountry === '' ? "-select-" : selectCountry}
          onSelect={onSelectCountry}>
          <div className='dropdown_items'>
            <input
              type='text'
              placeholder='Type search here'
              value={searchCountry}
              onChange={e => setSearchCountry(e.target.value)}/>

            {filteredCountries.map(country => (
              <Dropdown.Item 
                
                key={country.name} 
                eventKey={country.name + " (" + country.code + ")"}>
                {country.name + " (" + country.code + ")"}
              </Dropdown.Item>
            ))}
          </div>  
        </DropdownButton>
      </div>

      <div className ='column'>
        <DropdownButton
          title={selectLanguage === '' ? "-select-" : selectLanguage}
          onSelect={onSelectLanguage}>
          <div className='dropdown_items'>
            <input
              type='text'
              placeholder='Type search here'
              value={searchLanguage}
              onChange={e => setSearchLanguage(e.target.value)}
            />
            {filteredLanguages.map((language,i) => (
              <Dropdown.Item 
                key ={i} 
                eventKey={language}>
                {language}
              </Dropdown.Item>
            ))}  
          </div>
        </DropdownButton>
      </div> 
    </div>    
  );
}

export default SearchBox

