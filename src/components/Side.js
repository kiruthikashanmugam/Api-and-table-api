// import React from 'react';
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


// function Side() {
//   return (
//     <div style={{ display: 'flex', height: '100%' }}>
//     <Sidebar>
//       <Menu>
//         <SubMenu  label="Charts">
//           <MenuItem> Pie charts</MenuItem>
//           <MenuItem> Line charts</MenuItem>
//           <MenuItem> Bar charts</MenuItem>
//         </SubMenu>
//         <SubMenu label="Maps">
//           <MenuItem> Google maps</MenuItem>
//           <MenuItem> Open street maps</MenuItem>
//         </SubMenu>
//         <SubMenu label="Theme">
//           <MenuItem> Dark</MenuItem>
//           <MenuItem> Light</MenuItem>
//         </SubMenu>
//       </Menu>
//     </Sidebar>
//   </div>

//   )
// }

// export default Side




import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



const SideBarDashboard = () => {
    return (
        <div>
            <Sidebar>
                <Menu iconShape="square">
                    <MenuItem>Dashboard</MenuItem>
                    <SubMenu defaultOpen label={"Professors"} >
                        <SubMenu defaultOpen label={"components"} >
                            <MenuItem>component1</MenuItem>


                        </SubMenu>
                    </SubMenu>


                </Menu>
            </Sidebar>;
        </div>
    )
}

export default SideBarDashboard;
