# Trade Map

## To do list

### Data Collection
* top export & import commodity, + top HS92 Category

### Overall Chart Properties
* make legend
 * EU countries
 * countries with no data
 * color scales
* move labels: labels must be (1) physically located on top of the land mass (2) located on the biggest isolated land mass in that sovereignty (3) not overlapping other labels
* mobile: force landscape?

### Specific Chart properties
* flow lines
  * color-code imports vs exports using gradient: gradient must be rotated so that imports and exports always have the same color endpoint
  * curve flow lines? move completely overlapping lines
* lazy load svg elements OR pre-load with d3.queue?

### UI Parts
* toggle map coloring: GDP scale and current account balance scale
 * color scales: log or linear?
* toggle number of flow lines (consider performance)
* interactive hover
 * hover must be activated when pointer is in the area of the country regardless of items on top
 * darken non-connected countries, landmasses & ocean?
 * tooltip: data source, data units, data year, specifics
* consider transitions / animations


### Style
* don't forget to resize text before final push
 * adjust with window size?

### Production
* babel? sass?
* some sort of production build to push to gh-pages
