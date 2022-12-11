import { UpdateDisplay } from "./display"

let taskIndex

const OpenCloseEditTask = (e)=>{
    const container = document.getElementsByClassName('edit-task-container')[0]
    const content = document.getElementsByClassName('edit-task-content')[0]
    if (e.target.classList[0] == 'task-edit'){
        const taskContainer = e.target.parentElement.parentElement
        taskIndex = Array.from(taskContainer.parentElement.children).indexOf(taskContainer)
        const data = JSON.parse(localStorage.getItem('data'))    
        container.style.visibility = 'visible'
        content.style.visibility = 'visible'
        const contentFlagsContainer = content.children[2]
        const groupContainer = contentFlagsContainer.children[0].children[0]
        const priorityContainer = contentFlagsContainer.children[1].children[0]
        const taskData = data.tasks[taskIndex-1]
        content.children[0].value = taskData[1]
        content.children[1].value = taskData[2]
        for (let i=0;i<groupContainer.childElementCount;i++){
            if (groupContainer.children[i].value == taskData[0]){
                groupContainer.children[i].selected = true
            }
        }
        for (let i=0;i<priorityContainer.childElementCount;i++){
            if (priorityContainer.children[i].value == taskData[3]){
                priorityContainer.children[i].selected = true
            }
        }
        document.getElementsByClassName('edit-task-time')[0].value = taskData[5]
    } else if (e.target.classList[0] == 'edit-task-cancel'){
        container.style.visibility = 'hidden'
        content.style.visibility = 'hidden'
    } else if (e.target.classList[0] == 'edit-task-submit'){
        container.style.visibility = 'hidden'
        content.style.visibility = 'hidden'
        const data = JSON.parse(localStorage.getItem('data'))
        const titleValue = document.getElementsByClassName('edit-task-title')[0].value
        const descValue = document.getElementsByClassName('edit-task-description')[0].value
        const groupValue = document.getElementsByClassName('edit-group-list')[0].value
        const priorityValue = document.getElementsByClassName('edit-priority-list')[0].value
        const timeValue = document.getElementsByClassName('edit-task-time')[0].value
        const dateValue = document.getElementsByClassName('edit-task-date')[0].value
        const taskData = data.tasks[taskIndex-1]
        taskData[0] = groupValue
        taskData[1] = titleValue
        taskData[2] = descValue
        taskData[3] = priorityValue
        taskData[4] = dateValue
        taskData[5] = timeValue
        data.tasks.splice(taskIndex-1,1,taskData)
        localStorage.setItem('data',JSON.stringify(data))
        UpdateDisplay('all')
    }
}

export {
    OpenCloseEditTask
}