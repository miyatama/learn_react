import {useState, useEffect} from 'react'
import { useStateContext } from '../context/StateProvider'
import axios from 'axios'

export const useClassicalFetch = () => {
    const {tasks, setTasks} = useStateContext()
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    useEffect(() => {
        // 最初一回だけ実行する　
        const fetchData = async () => {
            setError(false)
            setLoading(true)
            try{
                const res = await axios('http://localhost:8000/api/tasks')
                setTasks(res.data)
            }catch(erro) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData()
    }, [setTasks])
    return {tasks, isLoading, isError};
}
