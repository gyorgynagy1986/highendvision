import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomCloseButtonDark, CustomCloseButtonLight } from '@/app/components/Button';

const notifySuccess = (message, isDarkMode) => 
  toast(message, {
    position: "top-center",
    autoClose: 1000,  // Auto close after 100ms
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Zoom,
    style: { height: '10', padding:'0' }, // Adjust the height as needed
    className: isDarkMode ? 'dark-success-toast' : 'success-toast', // Apply conditional class
    closeButton: isDarkMode ? <CustomCloseButtonDark /> : <CustomCloseButtonLight /> // Custom close button
  });

const notifyError = (message, autoClose = 1000, isDarkMode = false) => 
  toast.error(message, {
    position: "top-right",
    autoClose: autoClose,  // Auto close after the specified time
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'custom-toast',
    className: isDarkMode ? 'dark-error-toast' : 'error-toast', // Apply conditional class
    closeButton: isDarkMode ? <CustomCloseButtonDark /> : <CustomCloseButtonLight /> // Custom close button
  });

export { notifySuccess, notifyError };
