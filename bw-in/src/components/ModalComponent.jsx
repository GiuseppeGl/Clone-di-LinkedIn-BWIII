import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getPref, postExperience } from '../slice/addPref';

export default function ModalComponent({ show, onHide }) {

    const dispatch = useDispatch();
    const [selectedCheck1, setSelectedCheck1] = useState(false);
    const [selectedCheck2, setSelectedCheck2] = useState(false);


    useEffect(() => {
        dispatch(getPref({ userId: '65b6dacd8277b800192c90ce' }));
    }, [dispatch]);

    const [formData, setFormData] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        area: '',
        description: '',
        image: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSaveExperience = () => {
        dispatch(postExperience({ userId: '65b6dacd8277b800192c90ce', experienceData: formData }));
        onHide();
    };


    return (
        <Modal show={show} onHide={onHide} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title >Aggiungi la tua esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasic">
                        <Form.Label>Qualifica</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="ruolo"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic2">
                        <Form.Label>Nome azienda</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="azienda"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data di inizio</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Seleziona una data"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate3">
                        <Form.Label>Data di fine</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Seleziona una data"
                            disabled={selectedCheck2}
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Attualmente ricopro questo ruolo"
                            checked={selectedCheck2}
                            onChange={() => setSelectedCheck2(!selectedCheck2)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic5">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="città"
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasic4">
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="mi occupo di..."
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Media</Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                            checked={selectedCheck1}
                            onChange={() => setSelectedCheck1(!selectedCheck1)} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                {selectedCheck1 && (
                    <Button variant="primary" type="button" onClick={handleSaveExperience}>
                        Salva
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    )
}
