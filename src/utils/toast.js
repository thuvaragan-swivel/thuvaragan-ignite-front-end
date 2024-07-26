// utils/toast.js
import { toast } from 'react-toastify';

const showToast = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast(message);
  }
};

export default showToast;
