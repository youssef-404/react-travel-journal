
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={props.imageUrl}/>
            <div className="info">
                <div className="info--location">
                    <img src={require("../images/localisateur.png")}/>
                    <p>{props.location}</p>
                    <a href="https://goo.gl/maps/Kp4WLcafPZc8LF7U6" target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="info--date">{props.startDate} - {props.endDate}</p>
                <p className="info--description">{props.description}</p>
            </div>
        </div>
    );
}