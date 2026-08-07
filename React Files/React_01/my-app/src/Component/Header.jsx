import './Header.css';
function Header(){
    return (
      <div>
        <h1>Header</h1>
      </div>
    )
  }
function Fields({name,email,index}){
    return(
        <div className='field'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <h4>Remove</h4>    
        </div>
    )
}
export default Header
export {Fields};