# StickyAnnotations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## General Approach

To handle the drag functionality, three functions were created to handle the mouse down, mouse move, and mouse up events. When the mouse is clicked down, the isDragging flag is set to true, allowing the dragging action to take place. The mouse move function is responsible for updating the annotation object as the annotation is moved, and this updated object is then saved within the AnnotationService.

When the mouse button is released, the isDragging flag is set to false, indicating that dragging is no longer taking place, and the mouse move action is blocked. The implementation follows an observable pattern approach to facilitate the sharing and storage of data, such as the zoom value and annotations, among various components.

Overall, this approach efficiently handles the drag functionality by appropriately updating the necessary flags and objects during the mouse events. The use of the observable pattern enhances the reusability and maintainability of the code, allowing for seamless data sharing between different components.

## Advantages of this approach

The drag functionality in the code demonstrates simplicity, readability, and modularity. The clear organization of functions (startDragging, dragging, stopDragging) improves code comprehension and maintenance. The AnnotationComponent encapsulates the drag functionality, enabling easy integration into other parts of the application and reducing code duplication. Efficient calculations ensure that the dragged annotation stays within container boundaries, with percentage-based coordinates enhancing responsiveness. Integration with AnnotationService separates concerns and enhances maintainability.

## Screenshots

![OB6P566RTZ](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9333e0ae-8ee1-45c9-b8fb-67600bf0d0b3)

![firefox_LEhzO2b9Ts](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/ce027145-41a5-44c3-b51e-6de73dd8d265)

![firefox_lVscquzeZX](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/40c34495-8aa3-47b2-a81e-c19d3739fb0a)

![firefox_McUtomowOU](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/a586d0af-747a-43d5-ac1f-0ca38e675d8b)

Save button output:
![firefox_19SV7bq7ir](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9d709b42-7c3b-4024-94dc-60bc4da439ab)
