let togglenavstatus = false;


let togglenav = function() {
    //grab elements to be changed
    let getsidebar  = document.querySelector(".nav-sidebar");
    //grab unordered list
    let getsidebarul = document.querySelector(".nav-sidebar ul");
    //grab title
    let getsidebartitle = document.querySelector(".nav-sidebar span");
    //grab links and put them in an array
    let getsidebarlinks = document.querySelectorAll(".nav-sidebar a");

    if(togglenavstatus === false) 
    {
        // use the grabed elements i.e change their behaviours
        getsidebarul.style.visibility = "visible";
        getsidebar.style.width = "272px";
        getsidebartitle.style.opacity = "0.5";

        // change behaviour as an array
        let arraylength = getsidebarlinks.length;

        for(let i = 0; i < arraylength; i++)
        {
            getsidebarlinks[i].style.opacity = "1";

        }



        // state now becomes opposite
        togglenavstatus = true;

    }
    else if(togglenavstatus === true) 
    {
     
        getsidebar.style.width = "60px";
        getsidebartitle.style.opacity = "0";

        let arraylength = getsidebarlinks.length;

        for(let i = 0; i < arraylength; i++)
        {
            getsidebarlinks[i].style.opacity = "0";

        }

        getsidebarul.style.visibility = " hidden";



        togglenavstatus = false;
        
    }

}