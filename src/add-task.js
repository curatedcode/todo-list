import { UpdateDisplay } from "./display"


const OpenCloseAddTask = (action) => {
    const container = document.getElementsByClassName('add-task-container')[0]
    const content = document.getElementsByClassName('add-task-content')[0]
    if (action === 'open'){
        container.style.visibility = 'visible'
        content.style.visibility = 'visible'
    } else if (action === 'close'){
        container.style.visibility = 'hidden'
        content.style.visibility = 'hidden'
        document.getElementsByClassName('add-task-title')[0].value = ''
        document.getElementsByClassName('add-task-description')[0].value = ''
        document.getElementsByClassName('group-default')[0].selected = true
        document.getElementsByClassName('priority-default')[0].selected = true
        document.getElementsByClassName('add-task-time')[0].value = ''
        document.getElementsByClassName('add-task-date')[0].value = ''
    }
}

const AddTask = () => {
    const titleValue = document.getElementsByClassName('add-task-title')[0].value
    const descValue = document.getElementsByClassName('add-task-description')[0].value
    const groupValue = document.getElementsByClassName('add-group-list')[0].value
    const priorityValue = document.getElementsByClassName('add-priority-list')[0].value
    const timeValue = document.getElementsByClassName('add-task-time')[0].value
    const dateValue = document.getElementsByClassName('add-task-date')[0].value
    const data = localStorage.getItem('data')
    const finalData = JSON.parse(data)
    const newData = [
        `${groupValue}`,
        `${titleValue}`,
        `${descValue}`,
        `${priorityValue}`,
        `${dateValue}`,
        `${timeValue}`
    ]
    finalData.tasks.push(newData)
    localStorage.setItem('data',JSON.stringify(finalData))
    OpenCloseAddTask('close')
    UpdateDisplay('all')
}

export {
    OpenCloseAddTask,
    AddTask
}