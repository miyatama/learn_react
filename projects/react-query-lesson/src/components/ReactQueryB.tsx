import { VFC } from "react"
import { useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"
import {ChevronDoubleRightIcon} from '@heroicons/react/solid'
import { Task } from "../types/types"

export const ReactQueryB:VFC = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    // 'tasks' was defined at useQueryTasks
    const data = queryClient.getQueryData<Task[]>('tasks')
    console.log('rendered ReactQueryB')

    return (
        <>
            <p className="font-bold my-3">React Query B</p>
            {
                data?.map((task) => (
                    <p key={task.id}>{task.title}</p>
                ))
            }
            <ChevronDoubleRightIcon
                onClick={() => navigate('/')}
                className='h-5 w-5 mt-2 text-blue-500 cursor-pointer'/>
            <p className='text-sm'>react query A</p>
        </>
    )
}
