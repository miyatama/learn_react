import axios from "axios";
import { useAppDispatch } from "../app/hooks";
import { resetEditedTask } from "../slices/todoSlice";
import { useQueryClient, useMutation } from "react-query";
import {Task, EditTask} from '../types/types'

export const useMutateTask = () => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    // Omit<EditTask, 'id'> is EditTask except id
    const createTaskMutation = useMutation(
        (task:Omit<EditTask, 'id'> ) => 
            axios.post<Task>(`${process.env.REACT_APP_REST_URL}/tasks/`, task), 
            {
                onSuccess: (res) => {
                    // when exists cache tasks then add new task
                    const previousTodos = queryClient.getQueryData<Task[]>('tasks')
                    if(previousTodos) {
                        queryClient.setQueryData<Task[]>('tasks', [
                            // `...previousTodos` is spread expand
                            ...previousTodos,
                            res.data
                         ])
                    }
                    dispatch(resetEditedTask())
                }
            }
    )
    const updateTaskMutation = useMutation(
        (task: EditTask) =>
            axios.put<Task>(`${process.env.REACT_APP_REST_URL}/tasks/${task.id}/`, task), 
            {
                onSuccess: (res, variables) => {
                    const previousTodos = queryClient.getQueryData<Task[]>('tasks')
                    if( previousTodos) {
                        queryClient.setQueryData<Task[]>(
                            'tasks',
                            previousTodos.map((task) => task.id === variables.id ? res.data : task)
                        )
                    }
                    console.log('dispatch resetEditedTask')
                    dispatch(resetEditedTask())
                }
            }
    )
    const deleteTaskMutation = useMutation(
        (id: number) =>
            axios.delete<Task>(`${process.env.REACT_APP_REST_URL}/tasks/${id}/`),
            {
                onSuccess: (res, variables) => {
                    const previousTodos = queryClient.getQueryData<Task[]>('tasks')
                    if(previousTodos){
                        queryClient.setQueryData<Task[]>(
                            'tasks',
                            previousTodos.filter((task) => task.id !== variables)
                        )
                    }
                    dispatch(resetEditedTask())
                }
            }
    )
    return {createTaskMutation, updateTaskMutation, deleteTaskMutation}
}