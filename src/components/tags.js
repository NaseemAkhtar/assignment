import React from 'react'

function Tags({ tags, fetchTag }) {
    const handleClick = (obj)=>{
        fetchTag(obj)
    }
    return (
        <div className="tags">
            {tags?.map((tag, ind)=> (
                <span key={ind} onClick={() => handleClick(tag)}>{tag}</span>
            ))}
        </div>
    )
}

export default Tags