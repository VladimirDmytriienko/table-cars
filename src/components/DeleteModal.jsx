import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const DeleteModal = ({ open, onCancel, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>
                Confirm Delete
                <IconButton onClick={onCancel} aria-label="close" sx={{ position: 'absolute', right: 8, top: 8,}} >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                Are you sure you want to delete this car?
            </DialogContent>
            <DialogActions>
                <Button onClick={onConfirm} variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteModal;
