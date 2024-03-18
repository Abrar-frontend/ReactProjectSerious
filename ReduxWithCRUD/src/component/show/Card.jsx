import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllusers } from '../../features/userDataSlice'

function Card() {
  const dispatch = useDispatch()
  // const [id, setId] = useState()

  const { users , loading } = useSelector((state) => state.app)
  console.log(users)
  console.log(loading)

  useEffect(() => {
    dispatch(getAllusers())
  },[])

  if(loading){
    return <h2> Data is loading </h2>
  }

  console.log(users)
 
  return (
      <div>
            {
      users && users.map(user=>(
    
    
    <div className="container w-75 my-4   m-auto" key={user.id}>
    <div className="card m-2 p-4" >
  
  <div className="card-body">
    <div className='row'>
      <div className='col-4'>
        {/* <img src={ hassan }  className="img-fluid " alt="" /> */}
      </div>
      <div className='col-6'>
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text">{user.email}</p>
      <h5>{user.gender}</h5>
     
      <div className='d-flex w-50 '>
      <Link className='btn btn-success me-2'
        onClick={()=> [setId(user.id), setViewPopup(true)   ]}
      >view</Link>
      <Link to={`/update/${user.id}`} className='btn btn-primary me-2' >Edit</Link>
      <Link className='btn btn-danger me-2' onClick={()=> deleteHandler(user.id)  }
      >Delete</Link>
    </div>
      </div>
    </div> 
  </div>
</div>
</div>
))
      }

      </div>
    
)}

export default Card