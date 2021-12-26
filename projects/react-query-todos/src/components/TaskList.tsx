import {VFC, memo} from 'react'
import { useQuery } from 'react-query'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { TaskItemMemo } from './TaskItem'

// memolize
// export const TaskList: VFC = () => {
const TaskList: VFC = () => {
    const {status, data} = useQueryTasks()
    console.log('rendered TaskList')
    if(status === 'loading') {
        return <div>{'loading...'}</div>
    }
    if(status === 'error') {
        return <div>{'error'}</div>
    }
    return (
        <div>
        {data?.map((task) => (
            <ul>
                <TaskItemMemo task={task}/>
            </ul>
        ))}
        </div>
    )
}
export const TaskListMemo = memo(TaskList)