import React, {useState} from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create New Support Ticket</h2>
                <input 
                type="text"
                name="ticket_title"
                onChange={handleChange}
                value={formData.ticket_title}
                placeholder="Enter ticket title"
                />
                <br />
                <input 
                type="text"
                name="ticket_number"
                onChange={handleChange}
                value={formData.ticket_number}
                placeholder="Enter ticket number"
                />
                <br />
                <input 
                type="text"
                name="users_id"
                onChange={handleChange}
                value={formData.users_id}
                placeholder="Enter ticket owner"
                />
                <br />
                <input 
                type="text"
                name="devices_id"
                onChange={handleChange}
                value={formData.devices_id}
                placeholder="Enter device type affected"
                />
                <br />
                <input 
                type="text"
                name="stations_id"
                onChange={handleChange}
                value={formData.stations_id}
                placeholder="Enter station area"
                />
                <br />
                <br />
                <input 
                name="submit"
                value="+"
                type="submit"
                className="btn btn-success"
                />
            </form>
        </div>
    );
};

export default TicketCreateForm;