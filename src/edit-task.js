const OpenCloseEditTask = (target)=>{
    const container = document.getElementsByClassName('edit-task-container')[0]
    const content = document.getElementsByClassName('edit-task-content')[0]
    if (target === 'open'){
        container.style.visibility = 'visible'
        content.style.visibility = 'visible'
    } else if (target === 'close'){
        container.style.visibility = 'hidden'
        content.style.visibility = 'hidden'
    }
}

export {
    OpenCloseEditTask
}