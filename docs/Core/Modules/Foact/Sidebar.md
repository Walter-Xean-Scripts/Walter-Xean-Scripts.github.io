### SidebarItem
| Property            | Type                         | Optional | Description                                          |
|-                    |-                             |-         |-                                                     |
| id                  | string                       | no       | The id of the sidebar item                           |
| name                | string                       | no       | The name of the sidebar item                         |
| category            | string                       | no      | The category name of the sidebar item                 |
| categoryId          | string                       | yes      | The id of the category of the sidebar item           |
| icon                | string                       | yes      | The icon of the sidebar category                     |

You only need to define `categoryId` and `icon` once per category, the rest will get the data from their `category` property. Examples further down the page.

### Properties
| Property            | Type                         | Optional | Description                                          |
|-                    |-                             |-         |-                                                     |
| items               | SidebarItem[]                | yes      | The items of the sidebar                             |
| defaultSelectedKeys | string[]                     | yes      | The ids of the default selected menu items           |
| defaultOpenKeys     | string[]                     | yes      | The ids of the default opened sub menus              |
| onSidebarClick      | function                     | yes      | Called when a sidebar item is clicked                |

### Children
Not supported on a on sidebar item, use items property to set the items of the sidebar.

### Example
```lua
local Pages = {
    {
        category = "Overview",
        categoryId = "overview",
        icon = "DashboardOutlined",
        id = "home",
        name = "Home"
    },
    {
        category = "Overview",
        id = "stats",
        name = "Statistics"
    },
    {
        category = "Money",
        categoryId = "money",
        icon = "BankOutlined",
        id = "balance",
        name = "Balance"
    },
    {
        category = "Money",
        id = "withdraw",
        name = "Withdraw"
    },
    {
        category = "Money",
        id = "deposit",
        name = "Deposit"
    },
    {
        category = "Zones",
        categoryId = "zones",
        icon = "HeatMapOutlined",
        id = "myFourthItem",
        name = "My first item"
    },
}

local Sidebar = Menu:createElement("Sidebar", {
    height = "700px",
    width = "200px",
    defaultOpenKeys = { "overview" },
    items = Pages,
    onSidebarClick = function(_, _, sId)
        if pagesById[sId] then
            pagesById[sId]()
        end
    end
})
```
This is an example of how it could look in-game:<p/>
![Showcase](https://i.imgur.com/owDJknf.jpeg)