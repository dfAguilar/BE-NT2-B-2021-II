export default ({ todos }) => {

    const itemCount = todos.length
    // let uncheckItemCount = todos.filter(item => !item.checked).length

    const uncheckItemCount = todos.reduce((counter, item) => {
        // console.log('=====> ', item, counter)
        return (!item.checked) ? counter + 1 : counter
    }, 0)


    return (
        <div className="flow-right controls">
            <span>Item count: <span id="item-count">{itemCount}</span></span>
            <span>Unchecked count: <span id="unchecked-count">{uncheckItemCount}</span></span>
        </div>
    )
}