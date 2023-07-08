import { Config } from '@/types/toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  const config: Config = {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
  };

  const showToast = (message: string, type: string) => {
    switch (type) {
      case 'success':
        return toast.success(message, config);
      case 'error':
        return toast.error(message, config);
      case 'warning':
        return toast.warning(message, config);
      default:
        return toast(message, config);
    }
  };

  return {
    showToast,
  };
};

export default useToast;
