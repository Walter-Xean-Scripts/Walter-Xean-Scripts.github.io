### SidebarItem
| Property     | Type    | Optional | Description                                 |
|-             |-        |-         |-                                            |
| id           | string  | No       | The id of the sidebar item                  |
| name         | string  | No       | The name of the sidebar item                |
| category     | string  | No       | The category name of the sidebar item       |
| categoryId   | string  | Yes      | The id of the category of the sidebar item  |
| icon         | string  | Yes      | The icon of the sidebar category            |

You only need to define `categoryId` and `icon` once per category, the rest will get the data from their `category` property. Examples further down the page.

### Properties
| Property            | Type                 | Description                                          |
|-                    |-                     |-                                                     |
| items               | SidebarItem[]        | The items of the sidebar                             |
| defaultSelectedKeys | string[]             | The ids of the default selected menu items           |
| defaultOpenKeys     | string[]             | The ids of the default opened sub menus              |
| onClick             | function(event)      | Fired when menu item is clicked                      |
| onSelect            | function(event)      | Fired when menu item is selected                     |
| onDeselect          | function(event)      | Fired when menu item is deselected                   |
| onOpenChange        | function(openKeys)   | Fired when sub-menus are opened/closed               |
| [events]            | function             | Please read the [events page](Events)                |

All properties are optional.<p/>
[See More Properties Here](https://ant.design/components/menu)

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

AM:createElement("Sidebar", {
    height = "700px",
    width = "200px",
    defaultOpenKeys = { "overview" },
    items = Pages,
    onClick = function(_, _, event)
        local key = event.key
        local keyPath = event.keyPath
        print("onClick: Key: ", key, json.encode(event))
    end,
    onOpenChange = function(_, _, openKeys)
        print("onOpenChange: OpenKeys: ", json.encode(openKeys))
    end,
    onSelect = function (_, _, event)
        print("onSelect: ", json.encode(event))
    end,
    onDeselect = function (_, _, event)
        print("onDeselect: ", json.encode(event))
    end,
})
```
This is an example of how it could look in-game:<p/>
![Showcase](https://i.imgur.com/owDJknf.jpeg)