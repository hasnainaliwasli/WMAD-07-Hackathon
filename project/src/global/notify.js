
import { toast, Bounce } from 'react-toastify';

window.notify = (msg, type) => {

  const options = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  }

  switch (type) {
    case "success":
      toast.success(msg, options)
      break;
    case "error":
      toast.error(msg, options)
      break;
    case "warning":
      toast.warning(msg, options)
      break;
    case "info":
      toast.info(msg, options)
      break;
    default:
      toast(msg, options)
  }
}

