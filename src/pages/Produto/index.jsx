import { useParams } from 'react-router-dom'
import starting from '../../functions/starting'
import store from '../../store'
import axios from 'axios'
import isAdmin from '../../functions/isAdmin'
import { ProdutoADM } from '../../components/ProdutoADM'
import { ProdutoUSER } from '../../components/ProdutoUSER'
import { useEffect, useState } from 'react'

export function Produto() {
    const { id } = useParams()

    const [user, setUser] = useState(undefined)

    store.subscribe(() => setUser(store.getState().user))

    useEffect(() => setUser(store.getState().user))

    useEffect(() => {
        starting()
    }, [])

    return (
        isAdmin(user) ? <ProdutoADM id={id} /> : <ProdutoUSER id={id} />
    )
}