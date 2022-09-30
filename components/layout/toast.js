import { useContext } from 'react';
import { Context } from 'store/globalstate';


export default function Toast ({ color, message }) {
    const { dispatch } = useContext(Context);
    console.log(color)
    return (
        <div className="notif">
            <div className="notif-header bg-secondary">
                <button type="button" className="btn text-white" onClick={() => dispatch({type: 'NOTIFY', payload: {}})} data-bs-dismiss="toast" aria-label="Close">&times;</button>
            </div>
            <div className={`notif-body bg-${color}`} >
                {message}
            </div>
        </div>
    )
}