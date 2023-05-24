# StickyAnnotations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.

## General Approach

To handle dragg functionality were created 3 functions for mouse down, mouse move, and, mouse up events. On mouse down isDragging flag is changed to true and mouse move takes its action. Every annotation move will update the annotation object, which is saved inside AnnotationService. On mouse up isDragging flag will turn to false and the mouse move action will be blocked. The observable pattern approach was used to save and share data (zoom value, annotations) between various components.

## Pros and Cons

The pros:
 * Simplicity;
 * Flexibility: The component accepts input properties that provide the necessary information for dragging, such as coordinates, container boundaries, and annotation data. This allows for customization and flexibility in how the dragging functionality is used and configured.

The cons:
 * The dragging logic is directly implemented within the component itself, which may hinder code reusability and maintainability;
 * No support for touch devices
 * Frequency and complexity of the dragging calculations can impact perfomance

## Screenshots

![OB6P566RTZ](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9333e0ae-8ee1-45c9-b8fb-67600bf0d0b3)

![firefox_LEhzO2b9Ts](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/ce027145-41a5-44c3-b51e-6de73dd8d265)

![firefox_lVscquzeZX](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/40c34495-8aa3-47b2-a81e-c19d3739fb0a)

![firefox_McUtomowOU](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/a586d0af-747a-43d5-ac1f-0ca38e675d8b)

Save button output:
![firefox_19SV7bq7ir](https://github.com/MaksymKutasievichDev/sticky-annotations/assets/119333627/9d709b42-7c3b-4024-94dc-60bc4da439ab)
