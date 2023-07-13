import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from '../components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas ,far)


function SideBarMenu(){
return (
    <div className="container-fluid">

        <div className="row col-auto min-vh-100">
             <Menu/>
        </div>
    </div>

)

}

export default SideBarMenu;