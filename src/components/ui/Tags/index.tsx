interface Props { 
    tags: string[]
}

const Tags = (props: Props) => {
    return (
        <div className="flex gap-2 flex-wrap">
        {props.tags.map((tag,index) =>
            <span className="bg-gray-200 px-2 py-1 rounded-md text-xs font-medium"key={index}>{tag}</span>
        )}
        </div>
    )
}

export default Tags