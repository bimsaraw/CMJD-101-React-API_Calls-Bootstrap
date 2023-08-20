import axios from "axios";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const Item = () => {

    const [items, setItems] = useState(null);

    const loadData = async () => {
        const response = await axios.get("http://localhost:8081/items"); //Wait till this request is fulfilled or rejected
         
        if(response.status === 200) {
            setItems(response.data);
        }

    }

    return (
        <Container>
            <h1>Items</h1>

            <Button onClick={loadData}>Load Data from Serverside</Button>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items ? (
                        <>
                            {items.map(item => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category.name}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </>
                    ) : 'no items'}
                </tbody>
            </Table>
        </Container>
    )
}

export default Item;