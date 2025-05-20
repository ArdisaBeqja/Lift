import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertBox() {
  return (
    <>
      {['success', 'info', 'warning', 'danger'].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

function AlertLinks() {
  return (
    <>
      {['success', 'info', 'warning', 'danger'].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

function AlertDismissible() {
  const [show, setShow] = useState(true);
  return (
    <>
      {['success', 'info', 'warning', 'danger'].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          onClose={() => setShow(false)}
          dismissible
        >
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default AlertBox;
export { AlertLinks, AlertDismissible };
