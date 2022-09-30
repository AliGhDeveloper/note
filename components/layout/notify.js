import { useContext } from 'react';
import { Context } from 'store/globalstate';
import Loading from './loading';
import Toast from './toast';

export default function Notify() {
    const { notify } = useContext(Context).state
    if(Object.keys(notify).length === 0) return null
    return (
        <>
            {
                notify.success && 
                    <Toast color="success" message={notify.success}/>
            }
            {
                notify.loading && 
                    <Loading  />
            }
            {
                notify.error && 
                    <Toast color="danger" message={notify.error}/>
            }
        </>
    )
}