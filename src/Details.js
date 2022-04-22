import { useState } from "react"
//import service from './service'

const Details = ({details, closeDetails}) => {
    const [idField, setIdField] = useState(details.id)
    const [dateField, setDateField] = useState(details.date)
    const [customerField, setCustomerField] = useState(details.customer)
    const [trackNoField, setTrackNoField] = useState(details.trackingNo)
    const [statusField, setStatusField] = useState(details.status)
    const [consigneeField, setConsigneeField] = useState(details.consignee)

    /*
    const updateShipment = () => {
        const new_shipment = {...details, id: idField}
        service.update(details.id, new_shipment)
    }
    */

    return (
        <table>
            <tbody>
                <tr>
                    <td>Order Number</td>
                    <td>Date</td>
                </tr>
                <tr>
                    <td><input value = {idField} onChange = {e => setIdField(e.target.value)}/></td>
                    <td><input value = {dateField} onChange = {e => setDateField(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><button>Update</button></td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>Customer</td>
                    <td>Tracking Number</td>
                </tr>
                <tr>
                    <td><input value = {customerField} onChange = {e => setCustomerField(e.target.value)}/></td>
                    <td><input value = {trackNoField} onChange = {e => setTrackNoField(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><button>Update</button></td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>Consignee</td>
                </tr>
                <tr>
                    <td><input value = {statusField} onChange = {e => setStatusField(e.target.value)}/></td>
                    <td><input value = {consigneeField} onChange = {e => setConsigneeField(e.target.value)}/></td>
                </tr>
                <tr>
                    <td><button>Update</button></td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={closeDetails}>Close</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Details