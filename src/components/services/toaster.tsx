import toast from 'react-hot-toast';

const notify = () =>
  toast('Please, enter the text!', {
    duration: 3000,
    icon: '🤨',
  });

export { notify };
