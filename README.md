# movement
 
Movement is a simple JQuery library to animate DOM by scroll position.

## Usage

Movement depends on JQuery, so the JQuery Js file and the movement Js File should be add on HTML doc.
Place the code below on the page load and change the properties as needed.

``` javascript code
$.movement({
  properties: [
    // anoimate DOM 1
    {
      selector: '#man',
      start_time: 424,
      end_time: 757,
      name: 'left',
      type: 'ease-out-back',
      start_value: 20,
      end_value: 50,
      unit: '%'
  },
  // Animate DOM 2
  {
    selector: '#man',
    start_time: 424,
    end_time: 757,
    name: 'bottom',
    type: 'ease-out-back',  
    start_value: 110,
    end_value: 240,
    unit: 'px'
  }// , Animate DOM n 
  ]
});
```

The move can be used with a single DOM element using the JQuery syntax, as in the code below. You can animate as many css properties as you need.

``` javascript
$('#man').movement({
  properties: [
    { 
      name: 'left',
      type: 'ease-out-cubic',
      start_value: 20,
      end_value: 50,
      unit: '%'
    },
    {
      name: 'bottom',
      type: 'ease-out-back',
      start_value: 110,
      end_value: 240,
      unit: 'px'
    }
  ],
  start_time: 424,
  end_time: 757
});
```

## Properties

Name | Description
------- | -------
name | Name of css propertie to animate EX.: left, right, margin, etc
type | Animation effect to smoth the animation
start_value | Start value of css propertie
end_value | End value of css propertie
start_time | Value of screen position where the animation have to start
end_time | Value of screen position where the animation should stop
selector | css selector to determine the DOM element that will be animated
unit | Unit of css propertie EX.: %, px, pc, etc

## Animation smoth types

Movemnt suport the most commum smooth effects

* linear
* ease-in-quadratic
* ease-out-quadratic
* ease-in-out-quadratic
* ease-in-cubic
* ease-out-cubic
* ease-in-out-cubic
* ease-in-quartic
* ease-out-quartic
* ease-in-out-quartic
* ease-in-quintic
* ease-out-quintic
* ease-in-out-quintic
* ease-in-sinusoid
* ease-out-sinusoid
* ease-in-out-sinusoid
* ease-in-exp
* ease-out-exp
* ease-in-out-exp
* ease-in-circ
* ease-out-circ
* ease-in-out-circ
* ease-in-elastic
* ease-out-elastic
* ease-in-out-elastic
* ease-in-back
* ease-out-back
* ease-in-out-back
* ease-in-bounce
* ease-out-bounce
* ease-in-out-bounce
