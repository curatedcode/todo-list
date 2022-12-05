const OpenCloseAddTask = (target) => {
    const container = document.getElementsByClassName('add-task-container')[0]
    const content = document.getElementsByClassName('add-task-content')[0]
    if (target === 'open'){
        container.style.visibility = 'visible'
        content.style.visibility = 'visible'
    } else if (target === 'close'){
        container.style.visibility = 'hidden'
        content.style.visibility = 'hidden'
    }
}

export {
    OpenCloseAddTask
}