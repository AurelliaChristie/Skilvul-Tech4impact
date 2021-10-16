function Notification({status}){
    switch(status){
        case 'Warning':
            return(<p>Warning</p>)
        case 'Success':
            return(<p>Sucess</p>)
        case 'Error':
            return(<p>Error</p>)
    }
}

export default Notification;