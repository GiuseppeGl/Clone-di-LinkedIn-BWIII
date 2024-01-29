import React, { useState } from 'react';
import { Card, Badge } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../slice/deletePref';
import ModalComponent from './ModalComponent';

export default function ExpCard({ exp }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex border-top mt-2 justify-content-between">
      {exp && (
        <div className="d-flex">
          <div className="p-0 mt-2" style={{ width: '3rem' }}>
            {exp.image && <img src={exp.image} className="img-fluid" alt="placeholder" />}
          </div>
          <div className="flex-column p-0 mx-2">
            <p className="fs-7 mt-2 p-0 fw-bold">
              {exp.role} <br />
              <span className='text-muted' style={{ fontWeight: 'normal', fontSize: '13px' }}>
                {(exp.startDate && exp.endDate !== null && exp.startDate.slice) ? (
                  <span>{exp.startDate.slice(0, 7)} / {exp.endDate.slice(0, 7)}</span>
                ) : (
                  <span>{exp.startDate && exp.startDate.slice(0, 7)}/ Presente </span>
                )}
              </span>
              <br />
              <span className='text-muted' style={{ fontWeight: 'normal', fontSize: '13px' }}>{exp.area}</span>
            </p>
            <p className="fs-7 p-0">
              {exp.description}
            </p>
          </div>
        </div>
      )}
      <div className='mt-2'>
        <Badge className='text-align-end btn text-white mx-2' pill bg="warning" onClick={handleShow}>
          edit
        </Badge>
        <ModalComponent show={show} onHide={handleClose} />
        <Badge className='text-align-end btn text-white' pill bg="danger" onClick={() => dispatch(deleteExperience(exp.id))}>
          delete
        </Badge>
      </div>
    </div>
  );
}
