import axios from "axios";

const baseUrl = 'http://localhost:3001/shipments'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const deleteShipment = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = ({id, newObject}) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const exporting = {getAll, deleteShipment, update}

export default exporting