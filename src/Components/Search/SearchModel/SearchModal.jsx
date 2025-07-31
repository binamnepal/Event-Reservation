// src/components/SearchModal/SearchModal.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchModal.css';
import Search from '../Search';

const SearchModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button 
            className="back-button"
            onClick={() => {
              navigate(-1); // Go back in history
              onClose();    // Close the modal
            }}
          >
            ← Back
          </button>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default SearchModal;