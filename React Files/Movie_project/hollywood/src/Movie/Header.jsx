import '../Movie/Header.css'
function Header(props) {
    return (
    <div className='pro'>
    <img src={props.img} alt="" />
            <h2>{props.title}</h2>
               <h3>Year : {props.year}</h3>
    </div>

  )
}

export default Header