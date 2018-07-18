const sweetAlert = (result, alertClass, alertMessage) => {
    const formAlert = document.createElement("p");
    formAlert.className += `swal-${alertClass}`;
    formAlert.innerHTML = alertMessage;

    if (result === "gameOver") {
        return window.swal({
            content: formAlert,
            buttons: false,
            timer: "1000"
        });
    } else if (result === "success") {
        return window.swal({
            content: formAlert,
            buttons: false,
        });
    }
}

export default sweetAlert;