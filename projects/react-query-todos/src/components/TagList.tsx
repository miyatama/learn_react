import {VFC, memo} from 'react'
import { TagItemMemo } from './TagItem'
import { useQueryTags } from '../hooks/useQueryTags'
import { useQueryClient } from 'react-query'
import { Tag } from '../types/types'

const TagList:VFC = () => {
    console.log('rendered TagList')

    // when using getQueryData then not occured render
    // const client = useQueryClient()
    // const data = client.getQueryData<Tag[]>('tags')
    
    // when using useQuery then occured render
    const {status, data} = useQueryTags()
    if(status === 'loading') {
        return <div>{'loading...'}</div>
    }
    if(status === 'error') {
        return <div>{'error'}</div>
    }

    return (
        <div>
        {data?.map((tag) => (
            <ul>
                <TagItemMemo tag={tag}/>
            </ul>
        ))}
        </div>
    )
}
export const TagListMemo = memo(TagList)
