import React from 'react';
import componentRegistry from '../utils/componentRegistry';

// This component renders dynamic components based on data from the CMS
const DynamicPageRenderer = ({ components = [] }) => {
  console.log('Rendering components:', components.length);
  
  return (
    <>
      {components.map((component, index) => {
        // Get component type from the component data
        const ComponentType = componentRegistry[component.type];
        
        // Log for debugging
        console.log(`Component ${index}: ${component.key} ${component.type}`);
        
        // If component type exists in registry, render it
        if (ComponentType) {
          return (
            <ComponentType 
              key={component.key || `component-${index}`}
              {...component.props}
            />
          );
        }
        
        // If component type doesn't exist, render nothing or a placeholder
        console.warn(`Unknown component type: ${component.type}`);
        return null;
      })}
    </>
  );
};

export default DynamicPageRenderer;