import { OpenCloseEditTask } from './edit-task'

const UpdateDisplay = ()=>{
    const mainContainer = document.getElementsByClassName('main-content')[0]
    const parseData = JSON.parse(localStorage.getItem('data'))
    function isCurrentYear(date){
        const year = date.slice(6)
        if (year == new Date().getFullYear()){
            return true
        } else {
            return false
        }
    }
    function updateIconColor(icon,priority){
        if (priority === 'high'){icon.classList.add('task-icon-high')}
        else if (priority === 'normal'){icon.classList.add('task-icon-normal')}
    }

    for (let i=0; i<Object.keys(parseData.tasks).length; i++){
        const currentTask = parseData.tasks[i]
        const taskContainer = document.createElement('div')
        taskContainer.classList.add('task-container')

        const contentBoxOne = document.createElement('div')
        contentBoxOne.classList.add('task-content-one')

        const taskIcon = document.createElement('div')
        taskIcon.classList.add('task-icon','fa-regular','fa-circle')
        updateIconColor(taskIcon,currentTask[3])

        const taskText = document.createElement('div')
        taskText.classList.add('task-text')
        taskText.textContent = `${currentTask[1]}`

        const contentBoxTwo = document.createElement('div')
        contentBoxTwo.classList.add('task-content-two')

        const taskDateTime = document.createElement('div')
        taskDateTime.classList.add('task-date-time')
        if (isCurrentYear(currentTask[4]) === true) {
            taskDateTime.textContent = `${currentTask[4].slice(0,5)} ${currentTask[5]}`
        } else {
            taskDateTime.textContent = `${currentTask[4]} ${currentTask[5]}`
        }

        const taskEditBtn = document.createElement('div')
        taskEditBtn.classList.add('task-edit','fa-solid','fa-ellipsis')
        taskEditBtn.addEventListener('click',()=>{OpenCloseEditTask('open')})

        contentBoxTwo.append(taskDateTime,taskEditBtn)
        contentBoxOne.append(taskIcon,taskText)
        taskContainer.append(contentBoxOne,contentBoxTwo)
        mainContainer.append(taskContainer)
    }
}

export {
    UpdateDisplay
}