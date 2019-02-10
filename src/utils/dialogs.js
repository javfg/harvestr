import swal from 'sweetalert2';


const toast = (type, title, position) => swal.mixin({
  type,
  title,
  toast: true,
  position,
  showConfirmButton: false,
  timer: 3000
}).fire();

export const successToast = (title) => toast('success', title, 'top-end');
export const failureToast = (title) => toast('error', title, 'top-end');
export const infoToast = (title) => toast('info', title, 'top-end');
