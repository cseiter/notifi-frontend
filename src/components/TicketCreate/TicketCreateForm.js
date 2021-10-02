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
                <label htmlFor="ticket_title">Ticket Title</label>
                <input 
                type="text"
                name="ticket_title"
                onChange={handleChange}
                value={formData.ticket_title}
                placeholder="ex: Hip printer not working"
                />
                <br />
                <label htmlFor="ticket_details">Ticket Details</label>
                <input 
                type="textarea"
                style={{minHeight:100, minWidth:300}}
                name="ticket_details"
                onChange={handleChange}
                value={formData.ticket_details}
                placeholder="ex: hip printer unable to print, wireless is connected but no label is coming out"
                />
                <br />
                <label htmlFor="devices_id">Choose Device Affected</label>
                <input 
                type="text"
                name="devices_id"
                onChange={handleChange}
                value={formData.devices_id}
                placeholder="Enter device type affected"
                />
                <br />
                <label htmlFor="stations_title">Choose Station Affected</label>
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
                value="Create Ticket"
                type="submit"
                className="btn btn-success"
                />
            </form>
        </div>
    );
};

export default TicketCreateForm;