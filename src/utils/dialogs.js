import swal from 'sweetalert2';


const toast = (type, title, html, position, timer) => swal.mixin({
  type,
  title,
  html,
  toast: true,
  position,
  showConfirmButton: false,
  timer: timer || 3000
}).fire();

export const successToast = (title, html, timer) => toast('success', title, html, 'top-end', timer);
export const failureToast = (title, html, timer) => toast('error', title, html, 'top-end', timer);
export const infoToast = (title, html, timer) => toast('info', title, html, 'top-end', timer);
