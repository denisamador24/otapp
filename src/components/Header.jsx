import './Header.css';

const Header = () => {
  
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src='/logo.png'/>
      </div>
      <div className='title-container'>
        <h1>OTAPP</h1>
      </div>
    </div>
  );
}

export default Header;