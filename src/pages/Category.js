import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, FloatingLabel, Form, Table } from "react-bootstrap"

const Category = () => {

    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState(null);

    const loadData = async () => {
        const response = await axios.get('http://localhost:8081/categories');

        if(response.status === 200) {
            setCategories(response.data)
        }
    }

    useEffect(() => {
        loadData();
    },[])

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    const saveCategory = async () => {
        const response = await axios.post('http://localhost:8081/categories',{
            "name": category,
        })

        if(response.status === 200) {
            loadData();
            setCategory("");
        }
    }

    return (
        <Container>
            <h1>Category</h1>
            
            <Form>
                <FloatingLabel id="category_name" className="mb-3" label="Category Name">
                    <Form.Control placeholder="Category Name" onChange={handleCategory} value={category} />
                </FloatingLabel>
                <Button type="button" onClick={saveCategory}>Save Category</Button>
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {categories ? (
                        <>
                            {categories.map(category => (
                                <tr>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                </tr>
                            ))}
                        </>
                    ) : 'No Categories'}
                </tbody>
            </Table>
        </Container>
    )
}

export default Category;