import React, {useState} from 'react';
import SearchBox from '../components/SearchBox';

function HomeScreen() {
  //state value for language and country
  const [selectCountry, setCountry] = useState('');
  const [selectLanguage, setLanguage] = useState('');

  return (
    <div className="app-header">
      <p> Display my selected Value</p>
      <p>Country: {selectCountry}</p>
      <p>Language: {selectLanguage}</p>

      {/* Container box */}
      <div className="app-body">
        <div className="row">
          <div className='column'>Country</div>
          <div className='column'>Language</div>
        </div>

        <SearchBox 
          selectCountry={selectCountry} 
          selectLanguage={selectLanguage} 
          setCountry={setCountry} 
          setLanguage={setLanguage}/>     
      </div>

    </div>
  )
}

export default HomeScreen;