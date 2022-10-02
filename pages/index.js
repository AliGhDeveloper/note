import Link from "next/link";
import styles from 'styles/cards.module.scss';
import { useContext, useEffect, useState } from "react"
import { Router, useRouter } from 'next/router';
import { Context } from "store/globalstate";
import { deleteData, getData } from "utiles/fetchData";
import { removeItem } from "store/actionTypes";
import filtering from "utiles/filter";


export default function Home({notes, more}) {
  const router = useRouter();
  const [page, setPage] = useState(parseInt(router.query.page) || 1)
  const { dispatch } = useContext(Context);
  
  useEffect(() => {
    if(page !== 1) filtering({router, page})
  }, [page])

  const handleDelete = (id) => {
    deleteData(`/notes/${id}`)
      .then(result => {
        if(!result.error) dispatch(removeItem(state.notes, id, 'ADD_NOTES'));
        return dispatch({type: 'NOTIFY', payload: result})
      })
  }

  return (
    <>
      <div className="container my-3">
        <div className={`row ${styles.notes} row-wrap`}>
          {
            notes.map(note => (
              <div key={note._id} className="col-12 col-sm-4">
                <div  className={`card ${styles.card_style} shadow-sm p-3 mb-5 bg-body rounded `}>
                  <div className={styles.cardcontent} onClick={() => router.push(`/notes/${note._id}`)}>
                    <h2 className="card-title">{note.title}</h2>
                    <p className='card-body'>
                      {note.content}
                    </p>
                  </div>
                  <i className={`${styles.delete} fa-solid fa-trash text-danger`} onClick={() => handleDelete(note._id)} ></i>
                  <small className={`${styles.date} text-muted`}>{new Date(note.updatedAt).toLocaleDateString()}</small>
                </div>
              </div>
            ))
          }
        </div>
        {
          more && 
          <div className="row">
            <button type="button" className="btn btn-outline w-100" onClick={() => setPage(page + 1)}>Load more...</button>
          </div>
        }
        <div className={`${styles.add}`}>
          <Link href="/notes"><button className="btn btn-sm"><i className="fa-regular fa-pen-to-square"></i></button></Link>
        </div>
      </div>
    </>
  )
};

