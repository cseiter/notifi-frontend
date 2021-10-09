import React, {useState} from "react";
import './TicketCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function TicketCreateForm({onCreateTicket}) {

    const [formData, setFormData] = useState({
        ticket_title: "",
        ticket_details: "",
        devices_id: "",
        stations_id: "",
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

        fetch('https://localhost:3000/tickets', {
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
            <div className="CreateTicket">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="ticket_title">Ticket Title</label>
                <input className="form-control"
                    type="text"
                    name="ticket_title"
                    onChange={handleChange}
                    value={formData.ticket_title}
                    placeholder="ex: Hip printer not working"
                />
                <label htmlFor="ticket_details">Ticket Details</label>
                <textarea
                    className="form-control"
                    rows="5"
                    name="ticket_details"
                    onChange={handleChange}
                    value={formData.ticket_details}
                    placeholder="ex: hip printer unable to print, wireless is connected but no label is coming out"
                />
                <label htmlFor="devices_id">Choose Device Affected</label>
                <input className="form-control"
                    type="text"
                    name="devices_id"
                    onChange={handleChange}
                    value={formData.devices_id}
                    placeholder="Enter device type affected"
                />
                <label htmlFor="stations_title">Choose Station Affected</label>
                <input className="form-control"
                    type="text"
                    name="stations_id"
                    onChange={handleChange}
                    value={formData.stations_id}
                    placeholder="Enter station area"
                />
                <br />
                <input
                name="submit"
                value="Create Ticket"
                type="submit"
                className="btn btn-success"
                />
            </div>
        </form>
        </div>
        </center>
    );
};

export default TicketCreateForm;