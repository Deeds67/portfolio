interface Props { 
    tags: string[]
    className?: string
}

const Tags = (props: Props) => {
    return (
        <div className={`${props.className} flex gap-1 flex-wrap`}>
        {props.tags.map((tag,index) =>
            <span className="bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-xs font-medium text-slate-600" key={index}>{tag}</span>
        )}
        </div>
    )
}

export default Tags