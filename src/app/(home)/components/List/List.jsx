import './List.css'

export default function List() {
 
  
    return (
        <>
        <div className="li">

            <div className="left-column">
                <div className="p-image">
                    <img className='p-i' src='../81.jpg'/>
                </div>

                <div className="left-detail">
                    <div className="name">
                        Aryan Srivastava
                    </div>
                    <div className="role">
                        Investor Quality Supervisor
                    </div>
                </div>
            </div>


            <div className="right-column">

                <div className="right-detail">
                    <div className="username">aryan.srivastava</div>
                    <div className="job-title">Investor Quality Supervisor</div>
                    <div className="bio">Odit placeat eaque animi incidunt itaque</div>
                    <div className="email">Email: mainaryansrivastav@gmail.com</div>
                </div>

            </div>
        </div>
        </>
    );
  }