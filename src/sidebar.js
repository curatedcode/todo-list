const OpenCloseSidebar = (trigger)=>{
    const sidebarContainer = document.getElementsByClassName('nav-sidebar')[0]
    const mainContainer = document.getElementsByClassName('main-container')[0]
    if (trigger === 'open'){
        sidebarContainer.style.width = '150px'
        sidebarContainer.style.padding = '0 10px'
        mainContainer.style.marginLeft = '150px'
        sidebarContainer.style.visibility = 'visible'
    } else if (trigger === 'close'){
        sidebarContainer.style.visibility = 'hidden'
        sidebarContainer.style.width = '0px'
        sidebarContainer.style.padding = '0'
        mainContainer.style.marginLeft = ''
    }
}


export {
    OpenCloseSidebar
}