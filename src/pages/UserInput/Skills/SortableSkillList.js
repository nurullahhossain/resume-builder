import React, {useState} from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SkillsSection from './SkillsSection';
 
const SortableOrganizationList = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (
        <ul  style={{listStyleImage: "none !important"}}>
        {props.items.map((value, index) => (
            <SkillsSection  
                disabled={disabled}
                key={`item-${index}`} 
                index={index} 
                value={value} 
                data={props.data}
                onExperienceDelete={props.onExperienceDelete} 
                onArrayChange={props.onArrayChange} 
                setDisabled={setDisabled}
                setFunctions={props.setFunctions}
                values={props.items}
            />
        ))}
        </ul>
    );
}
 
export default SortableContainer(SortableOrganizationList);