interface props {
  alertClose: () => void;
  buttonText: string;
}

function Alert({ alertClose, buttonText }: props) {
  return (
    <div className="col-md-4 mt-4">
      <div className="alert alert-warning fade show" role="alert">
        <strong>{buttonText}</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          onClick={alertClose}
        ></button>
      </div>
    </div>
  );
}

export default Alert;
