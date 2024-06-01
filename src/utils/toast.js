import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CustomCloseButtonDark, CustomCloseButtonLight} from '@/app/components/Button'


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
    closeButton: isDarkMode ? <CustomCloseButtonDark /> : <CustomCloseButtonLight /> // Custom close button
 
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
    closeButton: isDarkMode ? <CustomCloseButtonDark /> : <CustomCloseButtonLight /> // Custom close button
});

export { notifySuccess, notifyError };
