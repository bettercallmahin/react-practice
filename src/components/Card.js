const firstName = 'Mahin';
const lastName = 'Muntasir';
const date = new Date()
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();


//component creation
function Card() {
    return <div className='card'>
      <h2 className='h2style'>{firstName} {lastName}</h2>
      <p className='pstyle'>
        This is a To-Do App
      </p>
      <p className='pstyle'>Today is: {dateName}/{monthName + 1}/{yearName}</p>
    </div>
}
  
export default Card;