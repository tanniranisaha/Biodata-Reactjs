import BioData from './commands/Biodata';
import './App.css';

function App() {
  return (
    <div className="App">
      <BioData
      name = 'Tanni Rani Saha'
      email = 'tonnyranisaha1@gmail.com'
      mobileNo = '01764443781'
      facebook = 'www.facebook.com/tonny.saha.319?mibextid=ZbWKwL'
      linkedin= 'www.linkedin.com/in/tanni-rani-saha-644241262'
      github = 'github.com/tanniranisaha'
      skills= {['HTML','CSS','JavaScript']}
      interests= {['React','Node','Python','Django']}
      referedBy = 'Anindita Bose'
      />

<BioData
      name = 'Dipty Rahman'
      email = 'dipty@gmail.com'
      mobileNo = '012345566778'
      facebook = 'www.facebook.com/dipty'
      linkedin= 'www.linkedin.com/dipty'
      github = 'www.github.com/dipty'
      skills= {['HTML','CSS','JavaScript','React','Node']}
      interests= {['NFT','Block Chain']}
      referedBy = 'Setu Mahbub'
      />
      {/* dipty resume */}
      {/* <div className='resume'>
        <h1> Resume of Dipty Rahman</h1>
        <hr/>
        <div className='contact'>
          <h3>Contact info Of Dipty Rahman</h3>
          <p>Email: dipty@gmail.com</p>
          <p>Mobile No: 01764443781</p>
          <p>Facebook: www.facebook.com/dipty</p>
          <p>Linked-In: www.linkedin.com/dipty</p>
          <p>Git-Hub: www.github.com/dipty</p>
        </div>
        <div className='skill'>
        <h3>Skills Of Dipty</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>

          </ul>
        </div>
        <div className='interested'>
        <h3>Interest Of Dipty</h3>
          <ul>
            <li>Vue.js</li>
            <li>NFT</li>
            <li>Block Chain</li>
          </ul>
        </div>
        <div className='reference'>
          <p>Referered By: Setu Mahbub</p>
        </div>
        <hr/>
        <hr/>
      </div> */}
    </div>
  );
}

export default App;
