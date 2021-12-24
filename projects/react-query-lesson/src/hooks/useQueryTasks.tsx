import { useQuery } from "react-query"
import axios from "axios"
import { Task } from "../types/types"

const getTasks = async () => {
    const {data} = await axios.get<Task[]>('http://localhost:8000/api/tasks')
    return data
}

export const useQueryTasks = () => {
    return useQuery<Task[], Error>({
        queryKey: 'tasks',
        queryFn: getTasks,
        cacheTime: 3000,
        staleTime: 3000,
    })
}
