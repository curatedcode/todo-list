import _ from 'lodash'
import './style.css'
import { OpenCloseSidebar } from './sidebar.js'
import { OpenCloseAddTask } from './add-task.js'
import { OpenCloseEditTask } from './edit-task.js'
import { UpdateDisplay } from './display.js'
import { AddTask } from './add-task'

document.getElementsByClassName('open-sidebar')[0].addEventListener('click',()=>{OpenCloseSidebar('open')})
document.getElementsByClassName('close-sidebar')[0].addEventListener('click',()=>{OpenCloseSidebar('close')})
document.getElementsByClassName('add-task-btn')[0].addEventListener('click',()=>{OpenCloseAddTask('open')})
document.getElementsByClassName('add-task-cancel')[0].addEventListener('click',()=>{OpenCloseAddTask('close')})
document.getElementsByClassName('add-task-submit')[0].addEventListener('click',()=>{AddTask()})
document.getElementsByClassName('task-edit')[0].addEventListener('click',()=>{OpenCloseEditTask('open')})
document.getElementsByClassName('edit-task-cancel')[0].addEventListener('click',()=>{OpenCloseEditTask('close')})
UpdateDisplay()