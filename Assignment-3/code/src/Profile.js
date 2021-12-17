import React from "react";
import './profile2.css';
export default class Profile extends React.Component{

    render(){
        return (
            <div className="container">
                {/* first box */}
                <div className="Box1">
            
                    <div className="box11"><strong>{this.props.employee.Name}</strong></div>
                    <div className="box12">{this.props.employee.EmployeeID}</div>
                    <button className="box13">Print</button>
                   

                </div>
                
                {/* second box */}
                <div className="Box2">
                    <div className="Box2-1"><strong>Appointment:</strong>{this.props.employee.Appointment}</div>
                    <div className="Box2-2"><strong>Email:</strong>{this.props.employee.Email}</div>
                    <div className="Box2-3"><strong>Contact:</strong>{this.props.employee.Phone}</div>
                </div>
                {/* third box */}
                <div className="Box3">
                    <div className="Box3-1">
                        <div className="Box3-1-1"><strong>Status</strong></div>
                        <span className="dot"></span>{this.props.order.Status}
                        
        
                    </div>
                    <div className="Box3-1">
                        <div className="Box3-1-1"><strong>Door</strong></div>
                        <span></span>{this.props.order.Door}
                        
                    </div>
                    <div className="Box3-1">
                        <div className="Box3-1-1"><strong>Time</strong></div>
                        <span></span>{this.props.order.Time}
                        
                    </div>

                </div>
                <div className="Box4">
                    <button type="checkbox" className="checkbox"> </button>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Profe-photo" className="Photo"></img>
                    <div>
                        <div className="Box4-1"><strong>Boltaart Bosbessen</strong></div>
                        <div>Overheerlijke Boltaart met Bosbessen de ud keuken ven de askjcjvcd</div>
                    </div> 
                </div>
                




            </div>
            
        )

    }
         
}