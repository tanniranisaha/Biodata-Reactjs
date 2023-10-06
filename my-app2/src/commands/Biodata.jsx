function BioData(props){
    return(
        <div className='resume'>
        <h1> Resume of  {props.name}</h1>
        <hr/>
        <div className='contact'>
          <h3>Contact info Of {props.name}</h3>
          <p>Email: {props.email}</p>
          <p>Mobile No: {props.mobileNo}</p>
          <p>Facebook: {props.facebook}</p>
          <p>Linked-In: {props.linkedin}</p>
          <p>Git-Hub: {props.github}</p>
        </div>
        <div className='skill'>
        <h3>Skills Of {props.name}</h3>
          <ul>
            {props.skills.map(skill =>(
            <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className='interests'>
        <h3>Interest Of Tanni Rani Saha</h3>
          <ul>
            {props.interests.map(interest =>(
                <li>{interest}</li>
            ))}
          </ul>
        </div>
        <div className='reference'>
          <p>Refered By: {props.referedBy}</p>
        </div>
        <hr/>
        <hr/>
      </div>
    )
}

export default BioData;