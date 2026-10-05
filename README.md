````markdown
# SpendWise Dashboard

## Overview

SpendWise is a modern financial dashboard shell designed to help users
visualize their spending and budget information.

This project focuses on building a responsive layout using CSS Grid,
Flexbox, CSS custom properties, and simple card micro-interactions.

## Features

### 1. Sidebar Navigation

The dashboard contains a sidebar with navigation links for:

- Dashboard
- Transactions
- Budget
- Savings
- Reports
- Settings

Flexbox is used to arrange the navigation items.

### 2. Dashboard Header

The header displays:

- Dashboard title
- Welcome message
- Current month
- User avatar

Flexbox is used to position the header content.

### 3. Financial Summary

The dashboard includes three summary sections:

- Total Budget
- Total Spent
- Remaining Balance

### 4. Category Cards

There are six financial category cards:

- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

Each card contains realistic static financial information and a progress
bar.

## CSS Grid

CSS Grid is used for the main dashboard layout.

It is also used to arrange:

- Summary sections
- Category cards

The desktop layout contains a sidebar and a main content area.

## Flexbox

Flexbox is used inside:

- Sidebar
- Navigation menu
- Header
- Profile section
- Dashboard cards
- Card contents

## CSS Custom Properties

The color theme is controlled using CSS variables in the `:root`
selector.

Examples include:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color

This makes the design easier to maintain and change.

## Responsive Design

A media query is included at `768px`.

On smaller screens:

- The sidebar and main content become a single-column layout.
- Navigation items wrap.
- Summary cards stack vertically.
- Category cards stack vertically.
- Header content becomes vertically arranged.

The layout can be tested using the browser DevTools Device Toolbar.

## Card Micro-interactions

The financial cards include hover and keyboard focus effects.

The cards move slightly upward and display a shadow when hovered or
focused.

The transition lasts 200ms, which satisfies the requirement of 250ms
or less.

## Dark Theme

A dark theme is included using:

```css
@media (prefers-color-scheme: dark)
````

Only the CSS custom properties are overridden to create the dark theme.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Responsive Design
* CSS Transitions

## Files

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

## Conclusion

The SpendWise Dashboard provides a clean and responsive foundation for a
future financial management application. The project demonstrates modern
CSS layout techniques while keeping the content static and focused on
visual structure.

```
```
