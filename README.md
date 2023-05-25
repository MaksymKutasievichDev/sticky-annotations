# StickyAnnotations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## General Approach

To handle the drag functionality, three functions were created to handle the mouse down, mouse move, and mouse up events. When the mouse is clicked down, the isDragging flag is set to true, allowing the dragging action to take place. The mouse move function is responsible for updating the annotation object as the annotation is moved, and this updated object is then saved within the AnnotationService.

When the mouse button is released, the isDragging flag is set to false, indicating that dragging is no longer taking place, and the mouse move action is blocked. The implementation follows an observable pattern approach to facilitate the sharing and storage of data, such as the zoom value and annotations, among various components.

Overall, this approach efficiently handles the drag functionality by appropriately updating the necessary flags and objects during the mouse events. The use of the observable pattern enhances the reusability and maintainability of the code, allowing for seamless data sharing between different components.

## Advantages of this approach

* Simplicity and Readability: the functions `startDragging`, `dragging`, and `stopDragging` clearly define the different stages of the drag operation, improving code organization and readability;
* Modularity and Reusability: the drag functionality is encapsulated within the `AnnotationComponent`, making it a self-contained and reusable component;
* Integration with `AnnotationService`: the code utilizes the `AnnotationsService` to update the annotation's coordinates when dragging is stopped;
* Event Handling and Input Properties: the code effectively handles the mouse events (`startDragging`, `dragging`, `stopDragging`) to initiate and stop the drag operation. It also utilizes input properties (`coords`, `type`, `containerBoundaries`, `annotation`) to provide the necessary data for the dragging functionality. This promotes flexibility and allows for easy customization and integration with other components.

## Screenshots

![OB6P566RTZ](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9333e0ae-8ee1-45c9-b8fb-67600bf0d0b3)

![firefox_LEhzO2b9Ts](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/ce027145-41a5-44c3-b51e-6de73dd8d265)

![firefox_lVscquzeZX](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/40c34495-8aa3-47b2-a81e-c19d3739fb0a)

![firefox_McUtomowOU](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/a586d0af-747a-43d5-ac1f-0ca38e675d8b)

Save button output:
![firefox_19SV7bq7ir](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9d709b42-7c3b-4024-94dc-60bc4da439ab)
