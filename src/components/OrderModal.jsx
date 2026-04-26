import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderModal = ({ isOpen, onClose, formData, setFormData, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content"
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2>Enter Your Details</h2>
          <form className="order-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            <input 
              type="text" 
              placeholder="Name" 
              required
              value={formData.userName}
              onChange={e => setFormData({...formData, userName: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              required
              value={formData.userMobile}
              onChange={e => setFormData({...formData, userMobile: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Address" 
              required
              value={formData.userAddress}
              onChange={e => setFormData({...formData, userAddress: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Pincode" 
              required
              value={formData.userPincode}
              onChange={e => setFormData({...formData, userPincode: e.target.value})}
            />
            <div className="modal-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="submit-btn-modal">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderModal;
