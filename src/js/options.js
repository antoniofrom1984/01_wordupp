
/*
 *
 *   MAKE AN ARRAY OUT OF THE INPUT
 *
 */
const wordArray = ['make', 'your', 'wall'];
const sendwords = document.getElementById('send');

function addTo() {
  wordArray.length = 0;
  const wordInput = document.getElementById('thewords').value;
  const myNew = wordInput.trim().split(' ');
  wordArray.push(myNew);
  wordArray2 = wordArray.flat();
}

// sendwords.onclick = addTo;
sendwords.addEventListener('click', () => {
  addTo();
  makeWall();
});
addTo();
/*
 *
 * NUMBER WORDS PER LINE
 *
 */
const sliderWord = document.getElementById('range');
let wordNumber = 6; // variable to be controlled
const dispDiv = document.getElementById('value3');
dispDiv.innerHTML = `Word Number: ${wordNumber}`;

// function is called when slider value changes
sliderWord.addEventListener('change', () => {
  wordNumber = sliderWord.value;
  dispDiv.innerHTML = `Word Number: ${wordNumber}`;

  makeWall();
});

// determine the number of words per row
function makeWords() {
  const rows = document.getElementsByClassName('linhas');

  for (let j = 0; j < wordNumber; j += 1) {
    for (let m = 0; m < rows.length; m += 1) {
      const myrandomSym = wordArray2[Math.floor(Math.random() * wordArray2.length)]; // generate random word
      const pElement = document.createElement('P'); // create P tag
      const pElementClass = pElement.classList.add('elements'); // add class to P

      const textNode2 = document.createTextNode(myrandomSym);
      // pElement.setAttribute("onclick", "lightUp();");
      rows[m].appendChild(pElement);
      pElement.appendChild(textNode2);
    }
  }
}

/*
 *
 * NUMBER OF LINES
 *
 */

const sliderRows = document.getElementById('range2');
let rowNumber = 13;
const dispDiv2 = document.getElementById('value4');
dispDiv2.innerHTML = `Number of rows: ${rowNumber}`;


sliderRows.addEventListener('change', () => {
  rowNumber = sliderRows.value;
  dispDiv2.innerHTML = `Number of rows: ${rowNumber}`;

  makeWall();
});

// determine the number of rows
function makeRows() {
  const wrap = document.getElementById('main');
  for (let i = 0; i < rowNumber; i += 1) {
    const textLines = document.createElement('DIV');
    const textLinesClass = textLines.classList.add('linhas');
    wrap.appendChild(textLines);
  }
}

/*
 *
 * BACKGROUND COLOUR AND TEXT COLOUR
 *
 */
const bgColorEle = document.getElementById('bgcolor');
const textColorEle = document.getElementById('textcolor');
let bgColor = 'd1d5da';
let textColor = 'FFCC00';

bgColorEle.addEventListener('change', () => {
  bgColor = bgColorEle.value;
  document.getElementById('main').style.backgroundColor = `#${bgColor}`;
}, {
  passive: true,
});

textColorEle.addEventListener('change', () => {
  textColor = textColorEle.value;
  const mytextcolor = document.getElementsByClassName('elements');

  for (let i = 0; i < mytextcolor.length; i += 1) {
    mytextcolor[i].style.color = `#${textColor}`;
  }
}, {
  passive: true,
});

/*
 *
 * SPACE BETWEEN LINES
 *
 */

const sliderLineHeight = document.getElementById('lineheight');
const dispDiv4 = document.getElementById('value6');
let d = 1.15;

dispDiv4.innerHTML = `Line height: ${d}`;

sliderLineHeight.addEventListener('change', () => {
  d = sliderLineHeight.value;
  dispDiv4.innerHTML = `Line height: ${d}`;
  document.getElementById('main').style.lineHeight = d;
}, {
  passive: true,
});

/*
 *
 * MARGINS
 *
 */
const sliderMargins = document.getElementById('range3');
let defMarigns = 2;
const dispDiv3 = document.getElementById('value5');

document.getElementById('main').style.padding = `${defMarigns}rem 0`;
dispDiv3.innerHTML = `top/ bottom margins: ${defMarigns}`;

sliderMargins.addEventListener('change', () => {
  defMarigns = sliderMargins.value;
  dispDiv3.innerHTML = `top/ bottom margins: ${defMarigns}`;
  document.getElementById('main').style.padding = `${defMarigns}rem 0`;
}, {
  passive: true,
});

/*
 *
 * HIGHLIGHTING WORDS WITH SEVERAL COLORS
 *
 */

function lightUp() {
  const mine = document.querySelectorAll('.elements');

  const hightlightColor = document.getElementById('hightlightcolor');
  let hightlight = 'pink';
  let mouseDown = 0;
  let touchStart = 0;
  document.body.onmousedown = function () {
    mouseDown = 1;
  };
  document.body.onmouseup = function () {
    mouseDown = 0;
  };
  document.body.ontouchstart = function () {
    // event.preventDefault();
    touchStart = 1;
  };
  document.body.ontouchend = function () {
    touchStart = 0;
    // event.preventDefault();
  };


  document.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('elements') && mouseDown === 1) {
      hightlight = hightlightColor.value;
      event.target.style.color = `#${hightlight}`;
    }
    // event.preventDefault();
  }, false);


  document.addEventListener('touchmove', (event) => {
    if (event.target.classList.contains('elements') && touchStart === 1) {
      hightlight = hightlightColor.value;
      event.target.style.color = `#${hightlight}`;
    }
    event.preventDefault();
  }, false);
}


/*
 *
 *   WORD SPACING
 *
 */
const sliderWordSpace = document.getElementById('wordspace');
const dispDiv5 = document.getElementById('value7');
let ee = 0.5;

dispDiv5.innerHTML = `Word Space: ${ee}`;

sliderWordSpace.addEventListener('change', () => {
  ee = sliderWordSpace.value;
  dispDiv5.innerHTML = `Word Space: ${ee}`;
  const mywordspace = document.getElementsByClassName('elements');

  for (let i = 0; i < mywordspace.length; i += 1) {
    mywordspace[i].style.paddingLeft = `${ee}rem`;
  }
}, {
  passive: true,
});

/*
 *
 *   FONT SIZE
 *
 */

const sliderFontSize = document.getElementById('fontsize');
const dispDiv6 = document.getElementById('value8');
let ff = 24;

dispDiv6.innerHTML = `font size: ${ff}`;

sliderFontSize.addEventListener('change', () => {
  ff = sliderFontSize.value;
  dispDiv6.innerHTML = `font size: ${ff}`;

  const myfontsize = document.getElementsByClassName('elements');

  for (let i = 0; i < myfontsize.length; i += 1) {
    myfontsize[i].style.fontSize = `${ff}px`;
  }
}, {
  passive: true,
});

/*
 *
 *  RANDOM FONT SIZE
 *
 */


function randomizeFont() {
  const mine = document.querySelectorAll('.elements');

  let mouseDown = 0;
  let touchStart = 0;
  document.body.onmousedown = function () {
    mouseDown = 1;
  };
  document.body.onmouseup = function () {
    mouseDown = 0;
  };
  document.body.ontouchstart = function () {
    // event.preventDefault();
    touchStart = 1;
  };
  document.body.ontouchend = function () {
    touchStart = 0;
    // event.preventDefault();
  };

  document.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('elements') && mouseDown === 1) {
      const randomFontSize = Math.floor(Math.random() * ff) + 1;
      event.target.style.fontSize = `${randomFontSize}px`;
    }
  // event.preventDefault();
  }, false);


  document.addEventListener('touchmove', (event) => {
    if (event.target.classList.contains('elements') && touchStart === 1) {
      const randomFontSize = Math.floor(Math.random() * ff) + 1;
      event.target.style.fontSize = `${randomFontSize}px`;
    }
    event.preventDefault();
  }, false);
}

/*
 *
 *   DELETE WORDS
 *
 */

function deleteWords() {
  let mouseDown = 0;
  let touchStart = 0;
  document.body.onmousedown = function () {
    mouseDown = 1;
  };
  document.body.onmouseup = function () {
    mouseDown = 0;
  };
  document.body.ontouchstart = function () {
    // event.preventDefault();
    touchStart = 1;
  };
  document.body.ontouchend = function () {
    touchStart = 0;
    // event.preventDefault();
  };

  document.addEventListener('mousemove', (event) => {
    if (event.target.classList.contains('elements') && mouseDown === 1) {
      event.target.style.color = `#${bgColor}`;
    }
  // event.preventDefault();
  }, false);


  document.addEventListener('touchmove', (event) => {
    if (event.target.classList.contains('elements') && touchStart === 1) {
      event.target.style.color = `#${bgColor}`;
    }
    event.preventDefault();
  }, false);
}
/*
 *
 *   minimizes the colour brush options
 *
 */
const randomsizes = document.getElementById('randomsizes');
const thehightlight = document.getElementById('highlight');
const deleting = document.getElementById('deletewords');

function checkit() {
  let mine = document.getElementById('hide');

  if (document.getElementById('randomsizes').checked) {
    mine = document.getElementById('hide');
    mine.style.display = 'none';
  } else if (document.getElementById('highlight').checked) {
    mine = document.getElementById('hide');
    mine.style.display = 'block';
  } else if (document.getElementById('deletewords').checked) {
    mine = document.getElementById('hide');
    mine.style.display = 'none';
  } else {
    // DO NOTHING
  }
}

/*
 *
 *   MAKING THE WALL
 *
 */

function makeWall() {
  // refreshArray();

  const wrap = document.getElementById('main');
  // empty #main's divs on refresh
  while (wrap.firstChild) {
    wrap.removeChild(wrap.firstChild);
  }

  makeRows();
  makeWords();
}

makeWall(); // make wall when loading page


/*
 *
 *   BACKGROUND PICTURE
 *
 */
document.getElementById('getval').addEventListener('change', readURL, true);
function readURL() {
  const file = document.getElementById('getval').files[0];
  const reader = new FileReader();
  reader.onloadend = function mybackground() {
    document.getElementById('main').style.backgroundImage = `url(${reader.result})`;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    // do nothin
  }
}
const deleteButton = document.getElementById('deletebutton');

deleteButton.onclick = function deleteIt() {
  document.getElementById('main').style.backgroundImage = 'none';
};

/*
 *
 *   CANVAS
 *
 */
// var inputs = document.querySelectorAll( '.inputfile' );
// Array.prototype.forEach.call( inputs, function( input )
// {
// 	var label	 = input.nextElementSibling,
// 		labelVal = label.innerHTML;
//
// 	input.addEventListener( 'change', function( e )
// 	{
// 		var fileName = '';
// 		if( this.files && this.files.length > 1 )
// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
// 		else
// 			fileName = e.target.value.split( '\' ).pop();
//
// 		if( fileName )
// 			label.querySelector( 'span' ).innerHTML = fileName;
// 		else
// 			label.innerHTML = labelVal;
// 	});
// });

const canvasSize = document.getElementById('main');
const thewidth = document.getElementById('rangewidth');
const dispWidth = document.getElementById('widthvalue');
let widthvalue = 100;


dispWidth.innerHTML = `Adjust BG Picture: ${widthvalue}`;


thewidth.addEventListener('change', () => {
  widthvalue = thewidth.value;
  dispWidth.innerHTML = `Adjust BG Picture: ${widthvalue}`;

  canvasSize.style.width = `${widthvalue}%`;
}, {
  passive: true,
});
/*
 *
 *   CHANGE THE FONT
 *
 */

function changeFont(font) {
  document.getElementById('output-text').style.fontFamily = font.value;
  const mytextfont = document.getElementsByClassName('elements');
  for (let i = 0; i < mytextfont.length; i += 1) {
    mytextfont[i].style.fontFamily = font.value;
  }
  // document.getElementById('input-font').addEventListener('change',
  //   changeFont(this));
}
// document.getElementById('output-text')
// document.getElementById('input-font').onchange = changeFont();
