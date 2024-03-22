import './App.css'

export function UserDetails(props) {

    console.log(props)

    return (
        <div className="usercontainer">
            <h1>Name : {props.name}</h1>
            <p>Job title: Web Developer</p>
            <p>Email: dhruv@gmail.com</p>
            <p>Phone: 9876543210</p>
            <p>Address: {props.city}, {props.state} </p>
        </div>
    )
}