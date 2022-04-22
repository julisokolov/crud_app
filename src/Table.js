import { useEffect, useState } from "react";
import shipService from './service'
import Details from './Details'

const Table = () => {
    const [shipments, setShipments] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [details, setDetails] = useState({})

    useEffect(() => {
      shipService
        .getAll()
        .then(initialShipments => {
          setShipments(initialShipments)
        })
    }, [])
  
    const handleShipmentDelete = id => {
      if (window.confirm('Delete shipment?')) {
        shipService
          .deleteShipment(id)
          .then(setShipments(shipments.filter(shipment => shipment.id !== id)))
      }
    }

    const handleShowDetails = (shipment) => {
        setShowDetails(true)
        setDetails(shipment)
    }

    return (
        <div>
            {showDetails ? <Details details={details} closeDetails = {() => setShowDetails(false)} /> :
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Tracking Number</th>
                            <th>Status</th>
                            <th>Consignee</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map((shipment, i) => (
                                <tr key={i}>
                                    <td>{shipment.id}</td>
                                    <td>{shipment.date}</td>
                                    <td>{shipment.customer}</td>
                                    <td>{shipment.trackingNo}</td>
                                    <td>{shipment.status}</td>
                                    <td>{shipment.consignee}</td>
                                    <td><button className="details_button" onClick={() => handleShowDetails(shipment)}>Details</button></td>
                                    <td><button className="delete_button" onClick = {() => handleShipmentDelete(shipment.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Table