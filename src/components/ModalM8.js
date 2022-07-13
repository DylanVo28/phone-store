import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalM8({children,open,onClose, className}) {

  return (
    <div>
      <style jsx global>
        {`
          .modal-m8 .css-1wnsr1i{
            width: 40vw;
            padding: 0;
            border: none;
            outline: none;
            overflow: scroll;
            height: 90vh;
          }
          .modal-m8{
            z-index: 99999;
          }
        `}
      </style>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-m8"
      >
        <Box sx={style}>
        {children}
        </Box>
      </Modal>
    </div>
  );
}
