# Landing Page Project

## Table of Contents

* Project Title
* Table of contents
* Instructions
* Usage

## Instructions

The project is a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

The landing page consists of various sections:
* Top Navigation Bar
* Page Title
* Sections containing text content
* Footer

The page is built with 3 main technologies:
1. HTML
2. CSS
3. JavaScript

HTML is used to construct the main content of the page,
CSS comes after that to style the page to make it good looking for the user.
But it is still a static after these two technologies. So, JavaScript plays the dynamic part.
Using JavaScript and the knowledge of DOM methods the static page turns dynamic.

Some of the used functions that were added to the page:
* isInViewport(element)
* whichSectionInViewport()
* removeHighlight()
* highlightSelectedSection(num)
* buildNav()
* scrollToFunction()
* function makeActive()

Those functions were used to help the EventListners to do the dynamic work correctly and clearly.

## Usage

The project is useful for pages that have unknown number of sections. Which helps in categorizing them into a navigation bar.
When any section in the navigation bar is clicked the page automatically goes to the selected section with a smooth scroll animation.
Even when a new section gets added, it will be automatically added to the navigation bar. As it is built dynamically.
