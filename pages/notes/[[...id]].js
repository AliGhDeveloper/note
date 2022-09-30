import styles from 'styles/noteform.module.scss';
import {useState, useContext, useEffect} from 'react';
import { getData, postData } from 'utiles/fetchData';
import { Context } from 'store/globalstate';
import { useRouter } from 'next/router';
import { putData } from 'utiles/fetchData';
import { addItem, updateItem } from 'store/actionTypes';

export default function NoteDetails () {
    const { state, dispatch } = useContext(Context);
    const router = useRouter();
    const [ data, setData ] = useState({
        title: '', content: ''
    })
    const { title, content } = data
    const id = router.query.id
    
    useEffect(() => {
        if(id){
            getData(`/notes/${id[0]}`)
            .then(result => {
                if(!result.error) {
                    setData(result)
                } else {
                    dispatch({type: 'NOTIFY', payload: result})
                }
            })
        }
    },[id])

    const handleSubmit = () => {
        if(!title || !content) return console.log('please add all fields');
        
        dispatch({ type: 'NOTIFY', payload: { loading: 'please wait...'}})

        if( id && id.length !== 0) {
            putData(`/notes/${id[0]}`, data, null) 
                .then(result => {
                    dispatch({type: 'NOTIFY', payload: result.message});
                    if(result.message && !result.message.error) {
                        dispatch(updateItem(state.notes, result.data, 'ADD_NOTES'))
                    }
                })
        } else {
            postData('/notes', data, null)
                .then(result => {
                    if(!result.error) {
                        dispatch(addItem(state.notes, result.data, 'ADD_NOTES'))
                        dispatch({type: 'NOTIFY', payload: result.message});
                        return router.push(`/notes/${result.data._id}`)
                    }
                })
        }
    }

    const handleChange = (e) => {
        setData( {...data, [e.target.name] : e.target.value } )
    }
    return (
        <>
        <div className="container">
            <div className={`${styles.note_form} w-100 my-4`}>
                <div className="from-group">
                    <label htmlFor="title" className="d-block">Note title:</label>
                    <input id="title" value={title} type="form-control form-control-sm d-block" placeholder="title..." onChange={handleChange} name="title" />
                </div>
                <div className="from-group">
                    <label htmlFor="content" className="d-block">Content:</label>
                    <textarea id="content" value={content} onChange={handleChange} name="content" ></textarea>
                </div>
                <div >
                    <button className={`btn btn-success btn-sm ${styles.save}`} disabled={state.notify.loading} onClick={handleSubmit} >{ id ? 'Update' : 'Save' }</button>
                </div>
            </div>
        </div>
        
    </>
    )
}

