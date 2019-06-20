import React from 'react';
import { generateStructure } from '../util/EmployeeStructure';
import { employeeMapping } from '../data/EmployeeMappingJson';
import Level from './Level';

const MainComponent = (props) => {
    let sortedArray = generateStructure(employeeMapping);

    let result = sortedArray.map((employee, index) => {
        return <Level name={employee.name} cssClassName={`${'bar-' + employee.index}`} key={index} />
    })

    return <div>
        {result}
    </div>
}

export default MainComponent;