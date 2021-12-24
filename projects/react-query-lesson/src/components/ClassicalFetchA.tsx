import {VFC} from 'react'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { useNavigate } from 'react-router-dom'
import {ChevronDoubleRightIcon} from '@heroicons/react/solid'

export const ClassicalFetchA: VFC = () => {
    const navigate = useNavigate()
    const {isLoading, isError, tasks} = useClassicalFetch()
    console.log('rendered ClassicalFetchA')
    /*
            {isError && <div>Error</div>}
            {isLoading ? (
                <div>loading...</div>
            ) : (
                ...
            )}
    */
    if (isLoading) return <div>{'loading ...'}</div>
    if (isError) return <div>{'Error'}</div>
    return (
        <div className='flex justify-center items-center flex-col'>
            <p className='text-center font-bold mb-3'>ClassicalFetchA</p>
            {tasks?.map((task)=> <p key={task.id}>{task.title}</p>)}
            <ChevronDoubleRightIcon
                onClick={() => navigate('/fetch-b')}
                className='h-5 w-5 mt-2 text-blue-500 cursor-pointer'/>
            <p className='text-sm'>Fetch B</p>
        </div>
    )
}
