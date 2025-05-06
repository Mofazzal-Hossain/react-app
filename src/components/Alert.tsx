

function Alert(){
    return (
        <div className="col-md-4 mt-4">
            <div className="alert alert-warning fade show" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Alert;