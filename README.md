Jekyll site for Terrill Remodeling
====================

Built off [Agency Jekyll Theme](https://github.com/y7kim/agency-jekyll-theme)

# How to edit

Via [content-editor.surge.sh](https://content-editor.surge.sh). Requires personal access token via github and permissions to repo.

# Where to edit

* Color, font, etc, changes can be made in _data/template.yml
* Projects are added to _data/projects.yml

# Projects

Here's how the file entries correspond to projects in the grid
![alt text](img/tutorial/file_to_grid.jpg "File To Grid")


Here's how the file entries correspond to the detailed view
![alt text](img/tutorial/file_to_modal.jpg "File To Modal")

* Note Client is empty, so it doesn't show up. If date, location or category were blank they would not show up as well.
* You have have as many pictures as you want. See the Treehouse project for an example with > 1 picture
* If your thumbnail images are different than 360px x 260px the grid might look weird. You can use [picresize](http://picresize.com/) to do this. Before you resize make sure you crop the image so it's 1) focused on the part of the picture you want and 2) approximately the correct proportioned rectangle. If you don't have the correct porportions when you resize, the image will stretch and shrink and could look unprofessional.
* The indentation is important. The first line of each project should begin with a "-" with no spaces preceeding. Each subsequent line should have exactly two spaces, with the only exception being image captions which need 4 spaces.
