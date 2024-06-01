import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = (message, autoClose = 1000, isDarkMode = false) => 
  toast.success(message, {
    position: "top-center",
    autoClose: autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: '100',
    className: isDarkMode ? 'dark-success-toast' : 'success-toast', // Apply conditional class
  });

const notifyError = (message, autoClose = 1000, isDarkMode = false) => 
  toast.error(message, {
    position: "top-right",
    autoClose: autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: '100',
    className: isDarkMode ? 'dark-error-toast' : 'error-toast', // Apply conditional class
  });

export { notifySuccess, notifyError };
