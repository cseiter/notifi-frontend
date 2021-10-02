import React, {useState} from "react";
import './TicketCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function TicketCreateForm({onCreateTicket}) {

    const [formData, setFormData] = useState({
        ticket_title: "",
        ticket_details: "",
        ticket_number: "",
        users_id: "",
        devices_id: "",
        stations_id: "",
        status_id: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTicket = {...formData};
        console.log(newTicket);

        fetch('https://ancient-retreat-67722.herokuapp.com/tickets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTicket),
        })
        .then((r) => r.json())
        .then(onCreateTicket);
    }

    return (
        <center>
        <div className="table">
            <form onSubmit={handleSubmit}>
                <div className="tr">
                    <span className="td">
                        <label htmlFor="ticket_title">Ticket Title</label>
                    </span>
                    <span className="td">
                        <input className="text"
                        type="text"
                        name="ticket_title"
                        onChange={handleChange}
                        value={formData.ticket_title}
                        placeholder="ex: Hip printer not working"
                        />
                    </span>
                </div>
                <div className="tr">
                    <span className="td">
                        <label htmlFor="ticket_details">Ticket Details</label>
                    </span>
                    <span className="td">
                        <input className="textarea"
                        type="textarea"
                        style={{minHeight:100, minWidth:300}}
                        name="ticket_details"
                        onChange={handleChange}
                        value={formData.ticket_details}
                        placeholder="ex: hip printer unable to print, wireless is connected but no label is coming out"
                         />
                    </span>
                </div>
                <div className="tr">
                    <span className="td">
                        <label htmlFor="devices_id">Choose Device Affected</label>
                    </span>
                    <span className="td">
                        <input className="text"
                        type="text"
                        name="devices_id"
                        onChange={handleChange}
                        value={formData.devices_id}
                        placeholder="Enter device type affected"
                        />
                    </span>
                </div>
                <div className="tr">
                    <span className="td">
                        <label htmlFor="stations_title">Choose Station Affected</label>
                    </span>
                    <span className="td">
                        <input className="text" 
                        type="text"
                        name="stations_id"
                        onChange={handleChange}
                        value={formData.stations_id}
                        placeholder="Enter station area"
                        />
                    </span>
                </div>
                <br />
                <input
                name="submit"
                value="Create Ticket"
                type="submit"
                className="btn btn-success"
                />
            </form>
        </div>
        </center>
    );
};

export default TicketCreateForm;