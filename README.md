assignment_markup_warmup_sprint
===============================

And 1 and 2!  And 1, and 2...!
[An HTM5 and CSS3 project from the Viking Code School](http://www.vikingcodeschool.com)

Melissa Manousos

Project - create sample blog page, including responsive options.
Full width = 990px
Mockup: https://s3.amazonaws.com/viking_education/web_development/web_app_eng/blog_mockup_wide.png

resized width < 990px.
Mockup: https://s3.amazonaws.com/viking_education/web_development/web_app_eng/blog_mockup_narrow.png

Responsiveness:
Having an unexpected issue with footer pushing off screen to the left.
  *float: none;*
  Corrected float issue.

Need to figure out how to hide Aside element on mobile resize. (display: none; or visibility:hidden;)
  *display: none;*
  Hid the element completely and allowed other elements to stack as if it didn't exist. This is the functionality I needed.

Need to resize footer to only be as wide as the screen. Currently width is extending past right edge.
  *adding right padding to text at least keeps it in view.
  need to revisit this to get the whole box back in frame.*

Need to get posts to fill row.
  *flex-grow: 1;*
  pushed posts fill their respective rows.
