import { filter } from 'lodash'
import { OpenCloseEditTask } from './edit-task'

const UpdateDisplay = (itemsToUpdate)=>{
    if (localStorage.getItem('data') == null){
        const data = {
            tasks: [
                [
                    "None",
                    "Add your own tasks by click the plus icon below!",
                    "This is where you can add some additional notes to you task!",
                    "high",
                    "",
                    ""
                ]
            ]
        }
        localStorage.setItem('data',JSON.stringify(data))
    }

    const mainContainer = document.getElementsByClassName('main-content')[0]
    const parseData = JSON.parse(localStorage.getItem('data'))
    const parentDiv = document.getElementsByClassName('main-content')[0]
    const projectContainer = document.getElementsByClassName('projects-container')[0]
    function clearDisplay(){
        while(parentDiv.childElementCount > 1){
            parentDiv.removeChild(parentDiv.lastChild)
        }
    }

    function updateIconColor(icon,priority){
        if (priority === 'high'){icon.classList.add('task-icon-high')}
        else if (priority === 'normal'){icon.classList.add('task-icon-normal')}
    }

    function createElements(newData,loopLength){
        clearDisplay()
        let projectNames = []
        for (let i=0; i<loopLength; i++){
            const currentTask = newData[i]
            const groupOption = document.createElement('option')
            groupOption.value = `${currentTask[0]}`
            groupOption.textContent = `${currentTask[0]}`
    
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
            taskDateTime.textContent = `${currentTask[5]} ${currentTask[4]}`
    
            const taskEditBtn = document.createElement('div')
            taskEditBtn.classList.add('task-edit','fa-solid','fa-ellipsis')
            taskEditBtn.addEventListener('click',OpenCloseEditTask)
            
            if (currentTask[0] !== "None") {
                document.getElementsByClassName('add-group-list')[0].append(groupOption)
                document.getElementsByClassName('edit-group-list')[0].append(groupOption)
            }
    
            contentBoxTwo.append(taskDateTime,taskEditBtn)
            contentBoxOne.append(taskIcon,taskText)
            taskContainer.append(contentBoxOne,contentBoxTwo)
            mainContainer.append(taskContainer)

            if (currentTask[0] !== 'None' && projectNames.indexOf(currentTask[0]) == -1){
                projectNames.push(currentTask[0])
            }
        }
        document.getElementsByClassName('open-sidebar')[0].addEventListener('click',createProjectElements)
        document.getElementsByClassName('close-sidebar')[0].addEventListener('click',removeProjectElements)
        let projectIteration = 0
        function removeProjectElements(){
            const filterParent = document.getElementsByClassName('filter-group')[0]
            while(filterParent.childElementCount > 0){
                filterParent.removeChild(filterParent.lastChild)
            }
            projectIteration = 0
        }
        function createProjectElements(){
            if (projectIteration%2 === 0){
                const projectNamesSet = new Set(projectNames)
                projectNamesSet.forEach((value)=>{
                    const filterGroup = document.getElementsByClassName('filter-group')[0]
                    const projectEl = document.createElement('div')
                    projectEl.classList.add('filter')
                    projectEl.addEventListener('click',viewOnlyProject)
                    projectEl.textContent = value
                    filterGroup.append(projectEl)
                })
            }
            projectIteration =+ 1
        }
    }
    if (itemsToUpdate === 'all'){
        createElements(parseData.tasks,Object.keys(parseData.tasks).length)
    }
    function viewOnlyProject (e){
        let projectTasks = []
        for (let i=0;i<Object.keys(parseData.tasks).length;i++){
            if (parseData.tasks[i][0] == e.target.textContent){
                projectTasks.push(parseData.tasks[i])
            }
        }
        createElements(projectTasks,projectTasks.length)
    }
}

const AddProject = (e)=>{
    const parent = e.target.parentElement
    const element = document.createElement('input')
    element.style.width = '6rem'
    element.addEventListener('keypress',(e)=>{
        if(e.key === 'Enter'){
            const projectEl = document.createElement('option')
            projectEl.value = `${element.value}`
            projectEl.textContent = `${element.value}`
            parent.children[0].append(projectEl)
            console.log('enter',projectEl,element.value)
            element.style.visibility = 'hidden'
            element.style.width = '0'
        }
    })
    parent.append(element)
}

export {
    UpdateDisplay,
    AddProject
}