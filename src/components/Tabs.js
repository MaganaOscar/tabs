import React, {useState} from 'react'

const Tabs = props => {
    const [item, setItem] = useState("");
    const [content, setContent] = useState("");
    const [selected, setSelected] = useState(null)

    const onClickHandler = (e, item, content) => {
        setItem(item);
        setContent(content);
        setSelected(item);
    }
 
    return (
        <div>
            {
                props.tabs.map( (item) => {
                    return (
                            item.item === selected ?
                            <button className="selected" onClick={ (e) => onClickHandler(e, item.item, item.content) }>{ item.item }</button>:
                            <button onClick={ (e) => onClickHandler(e, item.item, item.content) }>{ item.item }</button>
                    )
                })
            }
            <div>{content}</div>
        </div>
    )
}

export default Tabs;