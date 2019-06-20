function sortByManagerId(list) {
    list.sort(function (a, b) {
        return a.managerId - b.managerId;
    });
}

function getCEO(list, managerArray) {
    list.forEach((employee, index) => {
        if (!employee.managerId) {
            employee.index = 1;
            managerArray.push(employee);
        }
    });
}

function getManagerList(list, managerArray, newManagerArray) {
    list.forEach((employee, index) => {

        managerArray.forEach((manager, index) => {

            if (manager.id === employee.managerId) {
                newManagerArray.push(employee);
            }
        });
    });
}

export function generateStructure(list) {
    if (!Array.isArray(list)) return [];

    // sort by managerId
    sortByManagerId(list);

    let _2_dim_array = [];
    let _managerArray = [];

    getCEO(list, _managerArray);

    _2_dim_array.push(_managerArray);

    while (_managerArray.length !== 0) {
        let _new_managerArray = [];

        getManagerList(list, _managerArray, _new_managerArray);

        if (_new_managerArray.length) {
            _2_dim_array.push(_new_managerArray);
        };

        _managerArray = _new_managerArray;
    };

    return flattenArrayToHierarchy(_2_dim_array);
}

function flattenArrayToHierarchy(array_2D) {

    let componentArray = [];
    array_2D.forEach((managerArray, index_1) => {

        if (componentArray.length !== 0) {
            let indexCount = -1;
            
            managerArray.forEach((employee, index_2) => {

                componentArray.forEach((manager, index_3) => {

                    if (manager.id === employee.managerId && indexCount < index_2) {
                        indexCount = index_2;
                        employee.index = index_1 + 1;
                        componentArray.splice(index_3, 0, employee);
                    }
                })
            });
        } else {

            componentArray = [...managerArray];
        }
    });
    
    return componentArray.reverse();
}